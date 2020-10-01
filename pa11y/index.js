const globby = require('globby');
const pa11y = require('pa11y');

async function pa11yCheck() {
  const pages = await globby(['out/**/*.html']);

  pages.map((page) => {
    pa11y(`./${page}`).then((results) => {
      console.log(results);
    });
  });
}

pa11yCheck();
