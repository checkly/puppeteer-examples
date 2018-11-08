/**
 * @name html2pdf
 *
 * @desc Create a PDF from static HTML
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pdf}
 */

const puppeteer = require('puppeteer');

(async () => {
  const htmlContent = `<body>
  <h1>An example static HTML to PDF</h1>
  </body>`;
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setContent(htmlContent);
  await page.pdf({ path: 'html.pdf', format: 'A4' })
  await browser.close()
})()
