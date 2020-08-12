/**
 * @name get the value of common form elements
 *
 * @desc Gets the value of commonly used HTML form elements using page.$eval()
 *
 */
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 1800 })
  await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#checkboxes-and-radios')

  const checkboxStatus = await page.$eval('#defaultCheck1', input => { return input.checked })
  console.log('Checkbox checked status:', checkboxStatus)

  const radios = await page.$$eval('input[name="exampleRadios"]', inputs => { return inputs.map(input => input.value) })
  console.log('Radio values:', radios)

  await page.goto('https://getbootstrap.com/docs/4.3/components/forms/#select-menu')

  const selectOptions = await page.$$eval('.bd-example > select.custom-select.custom-select-lg.mb-3 > option', options => { return options.map(option => option.value) })
  console.log(selectOptions)

  await browser.close()
})()
