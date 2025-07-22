# Sitemap URL Validation

This feature validates that all URLs listed in the sitemap.xml file are working correctly and contain the required HTML structure.

## What it checks

For each URL in the sitemap, the test validates:
1. **HTTP 200 Status**: The URL returns a successful HTTP response
2. **Required HTML Elements**: The page contains `<head>`, `<body>`, and `<footer>` elements

## Usage

### Prerequisites
1. Build the project first: `npm run build`
2. Ensure the sitemap.xml is generated in the `out/` directory

### Running the validation
```bash
npm run test:sitemap
```

### Integration with CI/CD
You can integrate this into your build pipeline by running it after the build step:

```bash
npm run build
npm run test:sitemap
```

## Technical Details

- The test starts a local HTTP server serving the static files from the `out/` directory
- It parses the sitemap.xml to extract all URLs
- For each URL, it makes an HTTP request to the local server
- It uses JSDOM to parse the HTML response and check for required elements
- The test automatically cleans up the server after completion

## Files
- `tests/sitemap-validation.test.js` - The test implementation
- `jest.sitemap.config.js` - Jest configuration for the sitemap test
- `package.json` - Contains the `test:sitemap` script

This ensures that your build process generates all pages correctly and that they have the expected structure.