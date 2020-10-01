const globby = require('globby');
const pa11y = require('pa11y');

const runPa11y = async (page) => {
  return pa11y(`./${page}`);
};

async function pa11yCheck() {
  const pages = await globby(['out/**/*.html']);

  const full_results = await Promise.all(
    pages.map((page) => {
      return runPa11y(`./${page}`);
    }),
  );

  full_results.map(function (result) {
    console.log(result);
  });

  if (full_results.length > 0) {
    process.exit(2);
  } else {
    process.exit(0);
  }
}

pa11yCheck();
