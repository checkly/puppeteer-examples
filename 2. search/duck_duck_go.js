/**
 * @name Duck Duck Go search
 */

const puppeteer = require('puppeteer')

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://duckduckgo.com/', { waitUntil: 'networkidle2' })  
  await page.type('#search_form_input_homepage', 'Puppeteer')
  
  //Start search
  await page.keyboard.press("Enter");

  //give the page 3seconds to load
  await page.waitFor(3000);

  //make sure it is loaded
  await page.waitForSelector('div[class="results--main"]');

  //parse results
  var results = await page.evaluate(() => {
    let searchResults = [];
    let elms = document.querySelectorAll(
      'div[class="result__body links_main links_deep"]'
    );
    console.log("elements" + elms);
    elms.forEach(el => {
      var element = el.querySelector('h2 > a[class="result__a"]');

      var isAd = el.querySelectorAll('span[class="badge--ad-wrap"]').length > 0;

      var description = el.querySelector(
        'div[class="result__snippet js-result-snippet"]'
      ).textContent;

      var searchResult = {
        title: element.textContent,
        link: element.href,
        isAd: isAd,
        description: description
      };
      searchResults.push(searchResult);
    });

    return searchResults;
  });

  //print found results
  console.log(results);
  
  await browser.close()
})()
