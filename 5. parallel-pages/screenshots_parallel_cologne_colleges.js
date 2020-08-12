/**
 * @name Screenshots parallel pages in batches
 *
 * @desc parallel screenshotting of an array of Websites with small example
 */

const puppeteer = require('puppeteer')
const parallel = 4

const colleges = [
  { name: 'Universitaet zu Koeln', url: 'https://de.wikipedia.org/wiki/Universit%C3%A4t zu K%C3%B6ln' },
  { name: 'Technische Hochschule Koeln', url: 'https://de.wikipedia.org/wiki/Technische_Hochschule_K%C3%B6ln' },
  { name: 'Rheinische Fachhochschule Koeln', url: 'https://de.wikipedia.org/wiki/Rheinische_Fachhochschule_K%C3%B6ln' },
  { name: 'Deutsche Sporthochschule Koeln', url: 'https://de.wikipedia.org/wiki/Deutsche_Sporthochschule_K%C3%B6ln' },
  { name: 'Hochschule für Musik und Tanz Koeln', url: 'https://de.wikipedia.org/wiki/Hochschule_f%C3%BCr_Musik_und_Tanz_K%C3%B6ln' },
  { name: 'Kunsthochschule für Medien Koeln', url: 'https://de.wikipedia.org/wiki/Kunsthochschule_f%C3%BCr_Medien_K%C3%B6ln' },
  { name: 'Katholische Hochschule Nordrhein-Westfalen', url: 'https://de.wikipedia.org/wiki/Katholische_Hochschule_Nordrhein-Westfalen' },
  { name: 'Fachhochschule für oeffentliche Verwaltung Nordrhein-Westfalen', url: 'https://de.wikipedia.org/wiki/Fachhochschule_f%C3%BCr_%C3%B6ffentliche_Verwaltung_Nordrhein-Westfalen' },
  { name: 'Hochschule des Bundes für oeffentliche Verwaltung', url: 'https://de.wikipedia.org/wiki/Hochschule_des_Bundes_f%C3%BCr_%C3%B6ffentliche_Verwaltung' },
  { name: 'Cologne Business School', url: 'https://de.wikipedia.org/wiki/Cologne_Business_School' },
  { name: 'FOM – Hochschule für Oekonomie und Management', url: 'https://de.wikipedia.org/wiki/FOM_%E2%80%93_Hochschule_f%C3%BCr_Oekonomie_und_Management' },
  { name: 'Internationale Filmschule Koeln', url: 'https://de.wikipedia.org/wiki/Internationale_Filmschule_K%C3%B6ln' },
  { name: 'Hochschule Fresenius', url: 'https://de.wikipedia.org/wiki/Hochschule_Fresenius' }
]

const screenshotColleges = async (colleges, parallel) => {
  const parallelBatches = Math.ceil(colleges.length / parallel)

  console.log('\nI have gotten the task of taking screenshots of ' + colleges.length + ' Wikipedia articles on colleges in Cologne and will take ' + parallel + ' of them in paralell.')

  console.log(' This will result in ' + parallelBatches + ' batches.')

  // Split up the Array of colleges
  let k = 0
  for (let i = 0; i < colleges.length; i += parallel) {
    k++
    console.log('\nBatch ' + k + ' of ' + parallelBatches)
    // Launch and Setup Chromium
    const browser = await puppeteer.launch()
    // Fun with puppeteer
    const context = await browser.createIncognitoBrowserContext()
    const page = await context.newPage()
    page.setJavaScriptEnabled(false)

    const promises = []
    for (let j = 0; j < parallel; j++) {
      const elem = i + j
      // only proceed if there is an element
      if (colleges[elem] !== undefined) {
        // Promise to take Screenshots
        // promises push
        console.log('🖖 I promise to screenshot: ' + colleges[elem].name)
        promises.push(browser.newPage().then(async page => {
          await page.setViewport({ width: 1280, height: 800 })
          try {
            // Only create screenshot if page.goto get's no error
            await page.goto(colleges[elem].url)
            await page.screenshot({ path: elem + ' ' + colleges[elem].name + '.png' }).then(console.log('🤞 I have kept my promise to screenshot ' + colleges[elem].name))
          } catch (err) {
            console.log('❌ Sorry! I couldn\'t keep my promise to screenshot ' + colleges[elem].name)
          }
        }))
      }
    }

    // await promise all and close browser
    await Promise.all(promises)
    await browser.close()

    console.log('\nI finished this batch. I\'m ready for the next batch')
  }
}

screenshotColleges(colleges, parallel)
