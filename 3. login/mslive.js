/**
 * @name Microsoft Live Login
 *
 * @desc Logs into MS Live. 
 * Provide your username and password as environment variables when running the script, i.e:
 * linux:
 * MSLIVE_USER=myuser MSLIVE_PWD=mypassword node mslive.js
 * Windows users:
 * SET MSLIVE_USER=myuser
 * SET MSLIVE_PWD=mypassword
 * node mslive.js
 * for more info see here: https://stackoverflow.com/questions/9249830/how-can-i-set-node-env-production-on-windows
 */
const puppeteer = require('puppeteer');


(async() => {

    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.setViewport({ width: 1280, height: 800 })
	 await page.goto('https://login.live.com/',{waitUntil: ['networkidle2'] })

    const navigationPromise = page.waitForNavigation({waitUntil: ['networkidle2'] })

    await page.waitForSelector('[name="loginfmt"]')
    await page.type('[name="loginfmt"]', process.env.MSLIVE_USER)
    await page.click('[type="submit"]')

    await navigationPromise
    //we need to use waitForResponse because we are dealing with AJAX - no page navigation
    await page.waitForResponse(response => response.status() === 200);
    await page.waitForSelector('input[type="password"]', { visible: true })
    await page.type('input[type="password"]',process.env.MSLIVE_PWD)
	 await page.keyboard.press("Enter")

    await navigationPromise

    await browser.close()

})();
   


