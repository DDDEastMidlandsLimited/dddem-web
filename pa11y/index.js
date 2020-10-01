const globby = require('globby');
const pa11y = require('pa11y');

// Every pa11y call create a remote socket connection and in node this limit is 10.
// Setting this to 50 will silence a memory leak false positive warning when running
// and enable the script to run correctly.
process.setMaxListeners(50);

const runPa11y = async (page) => {
  return pa11y(`./${page}`, {
    ignore: [
      'WCAG2AA.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID',
    ],
  });
};

async function pa11yCheck() {
  const pages = await globby(['out/**/*.html']);

  const fullResults = await Promise.all(
    pages.map((page) => {
      return runPa11y(`./${page}`);
    }),
  );

  const issuesList = fullResults.filter((result) => {
    return result.issues.length > 0;
  });

  if (issuesList.length > 0) {
    process.exit(2);
  } else {
    process.exit(0);
  }
}

pa11yCheck();
