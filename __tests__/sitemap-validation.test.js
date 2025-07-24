const fs = require('fs');
const path = require('path');

// Setup TextEncoder/TextDecoder for jsdom
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');

describe('Sitemap URL Validation', () => {
  let sitemapUrls = [];
  let sitemapExists = false;

  beforeAll(() => {
    // Read and parse the sitemap.xml file
    const sitemapPath = path.join(__dirname, '../out/sitemap.xml');

    if (!fs.existsSync(sitemapPath)) {
      sitemapExists = false;
      return;
    }

    sitemapExists = true;
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

    // Parse URLs from sitemap XML
    const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
    if (urlMatches) {
      sitemapUrls = urlMatches.map((match) =>
        match.replace(/<\/?loc>/g, ''),
      );
    }
  });

  test('sitemap should contain URLs', () => {
    if (!sitemapExists) {
      console.log('Skipping sitemap test: Sitemap not found. Run "npm run build" first to generate the sitemap.');
      return;
    }
    expect(sitemapUrls.length).toBeGreaterThan(0);
  });

  // Helper function to convert remote URLs to local file paths
  const getLocalFilePath = (url) => {
    const baseUrl = 'https://www.dddeastmidlands.com';
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.host !== 'www.dddeastmidlands.com') {
        return null;
      }
    } catch (e) {
      return null; // Return null for invalid URLs
    }

    let relativePath = url.replace(baseUrl, '');
    if (relativePath === '') {
      relativePath = '/index.html';
    } else if (!relativePath.endsWith('.html')) {
      relativePath += '/index.html';
    }

    return path.join(__dirname, '../out', relativePath);
  };

  // Helper function to validate HTML structure
  const validateHtmlStructure = (htmlContent, url) => {
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    const head = document.querySelector('head');
    const body = document.querySelector('body');
    const footer = document.querySelector('footer');

    const errors = [];

    if (!head) {
      errors.push(`Missing <head> element in ${url}`);
    }

    if (!body) {
      errors.push(`Missing <body> element in ${url}`);
    }

    if (!footer) {
      errors.push(`Missing <footer> element in ${url}`);
    }

    return errors;
  };

  test('all URLs should have valid HTML structure and return 200 status equivalent', () => {
    if (!sitemapExists) {
      console.log('Skipping sitemap test: Sitemap not found. Run "npm run build" first to generate the sitemap.');
      return;
    }
    
    expect(sitemapUrls.length).toBeGreaterThan(0);

    const errors = [];

    sitemapUrls.forEach((url) => {
      const localFilePath = getLocalFilePath(url);

      if (!localFilePath) {
        errors.push(
          `Unable to determine local file path for URL: ${url}`,
        );
        return;
      }

      // Check if the local file exists (equivalent to 200 status)
      if (!fs.existsSync(localFilePath)) {
        errors.push(
          `File not found (equivalent to non-200 status) for URL: ${url}`,
        );
        return;
      }

      // Read the HTML content
      let htmlContent;
      try {
        htmlContent = fs.readFileSync(localFilePath, 'utf8');
      } catch (error) {
        errors.push(
          `Unable to read file for URL: ${url} - ${error.message}`,
        );
        return;
      }

      if (!htmlContent) {
        errors.push(`Empty HTML content for URL: ${url}`);
        return;
      }

      // Validate HTML structure
      const structureErrors = validateHtmlStructure(htmlContent, url);
      errors.push(...structureErrors);
    });

    if (errors.length > 0) {
      throw new Error(`URL validation failed:\n${errors.join('\n')}`);
    }
  });
});
