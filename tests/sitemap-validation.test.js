/**
 * Sitemap URL Validation Test
 * 
 * This test validates that all URLs in the generated sitemap.xml:
 * 1. Return HTTP 200 status code when accessed
 * 2. Have the required HTML elements: head, body, and footer
 * 
 * Prerequisites:
 * - The project must be built first (npm run build)
 * - The sitemap.xml file must exist in the out/ directory
 * 
 * Usage:
 * - Run with: npm run test:sitemap
 * - Do not include in regular test suite as it requires build artifacts
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const http = require('http');

// Polyfill for TextEncoder if not available
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

const { JSDOM } = require('jsdom');

/**
 * Make HTTP request using Node.js http module
 * @param {string} url - URL to fetch
 * @returns {Promise<{status: number, text: string}>}
 */
function makeHttpRequest(url) {
  return new Promise((resolve, reject) => {
    const request = http.get(url, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        resolve({
          status: response.statusCode,
          text: data
        });
      });
    });
    
    request.on('error', (error) => {
      reject(error);
    });
    
    request.setTimeout(10000, () => {
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

describe('Sitemap URL Validation', () => {
  let server;
  let serverPort;

  beforeAll(async () => {
    // Start a local server to serve the static files
    serverPort = 5000;
    const outDir = path.join(__dirname, '..', 'out');
    
    return new Promise((resolve, reject) => {
      server = spawn('npx', ['serve', '-l', serverPort.toString(), outDir], {
        stdio: 'pipe'
      });

      // Wait for server to start
      setTimeout(() => {
        if (server.killed) {
          reject(new Error('Server failed to start'));
        } else {
          resolve();
        }
      }, 2000);

      server.on('error', reject);
    });
  }, 30000);

  afterAll(async () => {
    if (server && !server.killed) {
      server.kill('SIGTERM');
      // Give the server time to shut down
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  });

  test('all sitemap URLs return 200 and have required HTML elements', async () => {
    const sitemapPath = path.join(__dirname, '..', 'out', 'sitemap.xml');
    
    // Check if sitemap exists
    expect(fs.existsSync(sitemapPath)).toBe(true);
    
    // Read and parse sitemap
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const urls = extractUrlsFromSitemap(sitemapContent);
    
    expect(urls.length).toBeGreaterThan(0);
    console.log(`Testing ${urls.length} URLs from sitemap`);

    // Test each URL
    const failedUrls = [];
    
    for (const url of urls) {
      try {
        // Convert production URL to local URL
        const localUrl = url.replace('https://www.dddeastmidlands.com', `http://localhost:${serverPort}`);
        
        // Make HTTP request
        const response = await makeHttpRequest(localUrl);
        
        if (response.status !== 200) {
          failedUrls.push({
            url: url,
            error: `HTTP ${response.status}`,
            localUrl: localUrl
          });
          continue;
        }

        // Get HTML content and check for required elements
        const html = response.text;
        const dom = new JSDOM(html);
        const document = dom.window.document;

        // Check for required HTML elements
        const head = document.querySelector('head');
        const body = document.querySelector('body');
        const footer = document.querySelector('footer');

        if (!head) {
          failedUrls.push({
            url: url,
            error: 'Missing <head> element',
            localUrl: localUrl
          });
        }

        if (!body) {
          failedUrls.push({
            url: url,
            error: 'Missing <body> element',
            localUrl: localUrl
          });
        }

        if (!footer) {
          failedUrls.push({
            url: url,
            error: 'Missing <footer> element',
            localUrl: localUrl
          });
        }

      } catch (error) {
        failedUrls.push({
          url: url,
          error: error.message,
          localUrl: `http://localhost:${serverPort}${url.replace('https://www.dddeastmidlands.com', '')}`
        });
      }
    }

    // Report results
    if (failedUrls.length > 0) {
      console.error('Failed URLs:');
      failedUrls.forEach(failed => {
        console.error(`- ${failed.url}: ${failed.error} (tested: ${failed.localUrl})`);
      });
    }

    expect(failedUrls).toHaveLength(0);
  }, 120000); // 2 minute timeout for all URL checks
});

/**
 * Extract URLs from sitemap XML content
 * @param {string} sitemapXml - XML content of the sitemap
 * @returns {string[]} - Array of URLs
 */
function extractUrlsFromSitemap(sitemapXml) {
  const urls = [];
  const urlRegex = /<loc>(.*?)<\/loc>/g;
  let match;

  while ((match = urlRegex.exec(sitemapXml)) !== null) {
    urls.push(match[1]);
  }

  return urls;
}