const fs = require('fs')
const fsS = require('file-system')
const comments = require('js-comments')
const _ = require('lodash')
const toc = {}
const rootUrl = 'https://github.com/checkly/puppeteer-examples/blob/master'

const pageHeader = `# Puppeteer examples\n\nPuppeteer Headless Chrome examples for real life use cases. Clone this repo and run them directy with a simple \`node\` command.\n`

const headers = {
  basics: 'The very basic on getting useful info from web page. Highlights the basic Puppeteer functions.',
  search: 'Common search input and select methods on search results.',
  login: 'Common login scenarios on popular website. Credentials mostly supplied with setting `ENV` variables.'
}

fsS.recurseSync('.', ['basics/*.js', 'login/*.js', 'search/*.js'], (filePath, relative, fileName) => {
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
for (let key in toc) {
  console.log(`- [${key}](#${_.kebabCase(key)})`)
  toc[key].forEach(item => {
    console.log(`  * [${item.name}](#${_.kebabCase(item.name)})`)
  })
}
console.log('\n')
for (let key in toc) {
  // content
  console.log(`## ${_.capitalize(key)}`)
  console.log(`${headers[key]}  `)
  toc[key].forEach(item => {
    console.log(`### ${item.name}`)
    console.log(item.desc)
    console.log('\n')
    console.log(`[${item.relative}](${item.url})`)
  })
}
