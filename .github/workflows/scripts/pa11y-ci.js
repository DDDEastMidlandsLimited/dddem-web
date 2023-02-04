const { promises: fs } = require('fs');

module.exports = async ({ github, context, core }) => {
  // Find this PR & do nothing if this isn't a PR
  const prNumber = context.payload.number;
  if (!prNumber) {
    return;
  }

  // Read the pa11y output and build the comment body
  const pa11yOutput = await fs.readFile(
    './pa11y-output.json',
    'utf8',
  );
  const lines = pa11yOutput.split('\n');
  const asJSON = JSON.parse(
    lines.find((line) => line.startsWith('{')),
  );
  const { total, errors, results } = asJSON;

  let commentBody = `${process.env.BODY_PREFIX}\n<h2>:microscope: pa11y-ci results</h2>\n\n`;
  commentBody += `- Number of URLs tested: ${total}\n`;

  if (!errors) {
    commentBody += `- No errors were found! :tada:\n`;
  } else {
    commentBody += `- Number of errors found: ${errors}. :sob:\n`;

    let formattedOutput = '';
    Object.keys(results).forEach((urlKey) => {
      const errors = results[urlKey];
      if (errors.length < 1) {
        return;
      }

      formattedOutput += `- [${urlKey}](${urlKey}):\n\n`;
      errors.forEach((error) => {
        formattedOutput += '  ```\n';
        formattedOutput += `  ${error.message}\n\n`;
        formattedOutput += `  ${error.selector}\n\n`;
        formattedOutput += `  ${error.context}\n\n`;
        formattedOutput += `  ${error.code}\n`;
        formattedOutput += '  ```\n\n';
      });
    });

    commentBody += `<details><summary>See results :eyes:</summary>\n\n${formattedOutput}</details>`;
  }

  // Get the comments on this PR
  const { data: comments } = await github.rest.issues.listComments({
    owner: process.env.OWNER,
    repo: process.env.REPO,
    issue_number: prNumber,
  });

  // Try to find an existing pa11y results comment
  const previousComment = comments.find((comment) =>
    comment.body.startsWith(process.env.BODY_PREFIX),
  );
  if (previousComment) {
    // Update the previous comment
    await github.rest.issues.updateComment({
      owner: process.env.OWNER,
      repo: process.env.REPO,
      comment_id: previousComment.id,
      body: commentBody,
    });
  } else {
    // Create a new comment
    await github.rest.issues.createComment({
      owner: process.env.OWNER,
      repo: process.env.REPO,
      issue_number: prNumber,
      body: commentBody,
    });
  }

  if (errors) {
    core.setFailed('Errors were found by pa11y-ci');
  }
};
