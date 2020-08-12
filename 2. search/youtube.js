/**
 * @name Youtube search
 *
 * @desc  Looks for Fleetwood Mac's "Dreams" video on youtube.com and clicks on the third video.
 * Waits for 5 seconds for the video to load.
 */
const puppeteer = require('puppeteer')
const screenshot = 'youtube_fm_dreams_video.png'
try {
  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://youtube.com')
    await page.type('#search', 'Fleetwood Mac Dreams')
    await page.click('button#search-icon-legacy')
    await page.waitForSelector('ytd-thumbnail.ytd-video-renderer')
    await page.screenshot({ path: 'youtube_fm_dreams_list.png' })
    const videos = await page.$$('ytd-thumbnail.ytd-video-renderer')
    await videos[2].click()
    await page.waitForSelector('.html5-video-container')
    await page.waitFor(5000)
    await page.screenshot({ path: screenshot })
    await browser.close()
    console.log('See screenshot: ' + screenshot)
  })()
} catch (err) {
  console.error(err)
}
