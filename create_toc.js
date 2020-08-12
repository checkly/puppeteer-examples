const fs = require('fs')
const fsS = require('file-system')
const comments = require('js-comments')
const _ = require('lodash')
const toc = {}
const rootUrl = 'https://github.com/checkly/puppeteer-examples/blob/master'

const pageHeader = '# Puppeteer examples\n\nPuppeteer Headless Chrome examples for real life use cases. Clone this repo' +
  ' and run them directy with a simple `node` command.\n\n' +
  '```bash\n' +
  'git clone https://github.com/checkly/puppeteer-examples\n' +
  'cd puppeteer-examples\n' +
  'npm i\n' +
  'node 2.\\ search/amazon.js\n' +
  '```\n' +
  'You can run these scripts in the [puppeteer sandbox](https://puppeteersandbox.com).\n'

const headers = {
  '1. basics': 'The very basic on getting useful info from web page. Highlights the basic Puppeteer functions.',
  '2. search': 'Common search input and select methods on search results.',
  '3. login': 'Common login scenarios on popular website. Credentials mostly supplied with setting `ENV` variables.',
  '4. shopping-carts': 'How to handle shopping cart functions like adding and removing items.',
  '5. parallel-pages': 'How to handle Allow parallel processing pages.',
  'a. mocha-tests': 'Mocha test runner scripts that use Puppeteer and the standard `assert` library to check specific ' +
  'properties and actions on a page. They can be executed like: \n\n' +
  '```bash\n' +
  'cd "a. mocha-tests"\n' +
  'npx mocha alibaba.js\n' +
  '```',
  'b. jest-tests': 'Jest test runner scripts that use Puppeteer to check specific properties and actions on a page. ' +
  'Very similar to the Mocha tests, but using the Jest `expect` assertions. Install Jest as a global dependency and ' +
  'run them as any other script\n\n' +
  '```bash\n' +
  'npm i -g jest\n' +
  'jest jest-tests/alibaba.js\n' +
  '```'
}

const directories = [
  '1. basics/*.js',
  '2. search/*.js',
  '3. login/*.js',
  '4. shopping-carts/*.js',
  '5. parallel-pages/*.js',
  'a. mocha-tests/*.js',
  'b. jest-tests/*.js'
]

fsS.recurseSync('.', directories, (filePath, relative, fileName) => {
  const content = comments.parse(fs.readFileSync(filePath, 'utf8'))
  const dirFile = relative.split('/')
  if (toc[dirFile[0]]) {
    toc[dirFile[0]].push(compileEntry(filePath, relative, content))
  } else {
    toc[dirFile[0]] = []
    toc[dirFile[0]].push(compileEntry(filePath, relative, content))
  }
})

function compileEntry (filePath, relative, content) {
  return {
    name: content[0].name,
    file: filePath.split('/')[1],
    url: `${rootUrl}/${filePath}`,
    desc: content[0].desc,
    relative
  }
}
console.log(pageHeader)

// index
for (const key in toc) {
  console.log(`- [${key}](#${_.kebabCase(key)})`)
  toc[key].forEach(item => {
    console.log(`  * [${item.name}](#${_.kebabCase(item.name)})`)
  })
}
console.log('\n')
for (const key in toc) {
  // content
  console.log(`## ${_.capitalize(key)}`)
  console.log(`${headers[key]}  `)
  toc[key].forEach(item => {
    console.log(`### ${item.name}`)
    console.log(item.desc)
    console.log('\n')
    console.log(`[${item.relative}](${item.url.replace(/ /g, '%20')})`)
  })
}
