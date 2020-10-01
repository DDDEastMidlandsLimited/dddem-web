const globby = require('globby');
const pa11y = require('pa11y');

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
