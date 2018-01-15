/**
 * @name alerts
 *
 * @desc Create an alert dialog and close it again.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-dialog}
 */
const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
  const page = await browser.newPage()
  await page.goto('https://www.google.com/')

  page.on('dialog', async dialog => {
    console.log(dialog.message())
    await dialog.dismiss()
    await browser.close()
  })
  page.evaluate(() => alert('This message is inside an alert box'))
})
