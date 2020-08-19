# Puppeteer examples


> Deprecation notice: We are moving our efforts to [theheadless.dev](https://github.com/checkly/theheadless.dev), a new free & open source knowledge base for Puppeteer AND Playwright. Idea is the same: practical examples and guides, by the community. We — the team at Checkly — are going to pour a lot of love & care into this new project. Feel free to [contribute!](https://github.com/checkly/theheadless.dev/blob/master/CONTRIBUTING.md)

Puppeteer Headless Chrome examples for real life use cases. Clone this repo and run them directy with a simple `node` command.

```bash
git clone https://github.com/checkly/puppeteer-examples
cd puppeteer-examples
npm i
node 2.\ search/amazon.js
```
You can run these scripts in the [puppeteer sandbox](https://puppeteersandbox.com).

- [1. basics](#1-basics)
  * [alerts](#alerts)
  * [Download file / upload file](#download-file-upload-file)
  * [emulate devices](#emulate-devices)
  * [get the value of common form elements](#get-the-value-of-common-form-elements)
  * [get list of links](#get-list-of-links)
  * [get text value of an element](#get-text-value-of-an-element)
  * [get title](#get-title)
  * [hover](#hover)
  * [keyboard](#keyboard)
  * [location_faker](#location-faker)
  * [mouse](#mouse)
  * [pdf](#pdf)
  * [request interception](#request-interception)
  * [screenshots](#screenshots)
  * [screenshots clipped](#screenshots-clipped)
  * [set cookie](#set-cookie)
- [2. search](#2-search)
  * [Amazon search](#amazon-search)
  * [Booking.com search](#booking-com-search)
  * [Duck Duck Go search](#duck-duck-go-search)
  * [Youtube search](#youtube-search)
- [3. login](#3-login)
  * [Github](#github)
  * [Google Social Login](#google-social-login)
  * [Instagram](#instagram)
  * [Microsoft Live Login](#microsoft-live-login)
- [4. shopping-carts](#4-shopping-carts)
  * [Staples shopping cart](#staples-shopping-cart)
  * [Walmart shopping cart](#walmart-shopping-cart)
- [5. parallel-pages](#5-parallel-pages)
  * [Screenshots parallel pages](#screenshots-parallel-pages)
  * [Screenshots parallel pages in batches](#screenshots-parallel-pages-in-batches)
- [a. mocha-tests](#a-mocha-tests)
  * [Alibaba product search](#alibaba-product-search)
  * [Amazon product search](#amazon-product-search)
  * [codesandbox.io](#codesandbox-io)
  * [Duck Duck Go search](#duck-duck-go-search)
  * [Etsy shopping cart](#etsy-shopping-cart)
  * [Gmail signup](#gmail-signup)
  * [Google search](#google-search)
  * [Staples shopping cart](#staples-shopping-cart)
  * [Walmart shopping cart](#walmart-shopping-cart)
- [b. jest-tests](#b-jest-tests)
  * [Alibaba product search](#alibaba-product-search)
  * [Amazon product search](#amazon-product-search)
  * [codesandbox.io](#codesandbox-io)
  * [Etsy shopping cart](#etsy-shopping-cart)
  * [Google search](#google-search)
  * [Walmart shopping cart](#walmart-shopping-cart)


## 1. basics
The very basic on getting useful info from web page. Highlights the basic Puppeteer functions.  
### alerts
Create an alert dialog and close it again.


[1. basics/alerts.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/alerts.js)
### Download file / upload file
Find an image by class selector, downloads the image, saves it to disk and read it again. Use this together with a .fileUpload() method.


[1. basics/download_upload.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/download_upload.js)
### emulate devices
Use the built in devices descriptors to emulate an Iphone 6. These are actually shortcuts for calling page.setUserAgent() and page.setViewPort().


[1. basics/emulate_devices.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/emulate_devices.js)
### get the value of common form elements
Gets the value of commonly used HTML form elements using page.$eval()


[1. basics/forms.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/forms.js)
### get list of links
Scrapes Hacker News for links on the home page and returns the top 10


[1. basics/get_list_of_links.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/get_list_of_links.js)
### get text value of an element
Gets the text value of an element by using the page.$eval method


[1. basics/get_text_value.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/get_text_value.js)
### get title
Get the title of a page and print it to the console.


[1. basics/get_title.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/get_title.js)
### hover
The hover function is a combination of scrolling and putting the mouse into a hover state over the requested element. This example hovers the first track we find on the soundcloud.com homepage, which should trigger the play and like buttons to be visible


[1. basics/hover.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/hover.js)
### keyboard
types into a text editor


[1. basics/keyboard.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/keyboard.js)
### location_faker
Fake the location for the geolocation API used by the browsers


[1. basics/location_faker.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/location_faker.js)
### mouse
Most of the things you can click using straight .click() handlers, but for some situation directly instructing the mouse might be convenient. This example load a page that plays back what mouse actions are used on the page.


[1. basics/mouse.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/mouse.js)
### pdf
Renders a PDF of the Puppeteer API spec. This is a pretty long page and will generate a nice, A4 size multi-page PDF.


[1. basics/pdf.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/pdf.js)
### request interception
Uses Puppeteer request interception, blocks images from loading, then snaps a basic screenshot of the full New York Time homepage and saves it a .png file.


[1. basics/request_interception.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/request_interception.js)
### screenshots
Snaps a basic screenshot of the full New York Time homepage and saves it a .png file.


[1. basics/screenshots.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/screenshots.js)
### screenshots clipped
Grabs and clips out just the stock tickers on the Yahoo finance page


[1. basics/screenshots_clipped.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/screenshots_clipped.js)
### set cookie
Sets the "login_email" property in a Paypal cookie so the login screen is pre-filled with an email address.


[1. basics/set_cookie.js](https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/set_cookie.js)
## 2. search
Common search input and select methods on search results.  
### Amazon search
Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.


[2. search/amazon.js](https://github.com/checkly/puppeteer-examples/blob/master/2.%20search/amazon.js)
### Booking.com search
Finds accommodations in Berlin on Booking.com, takes a screenshot and logs the top 10.


[2. search/booking.js](https://github.com/checkly/puppeteer-examples/blob/master/2.%20search/booking.js)
### Duck Duck Go search
undefined


[2. search/duck_duck_go.js](https://github.com/checkly/puppeteer-examples/blob/master/2.%20search/duck_duck_go.js)
### Youtube search
Looks for Fleetwood Mac's "Dreams" video on youtube.com and clicks on the third video. Waits for 5 seconds for the video to load.


[2. search/youtube.js](https://github.com/checkly/puppeteer-examples/blob/master/2.%20search/youtube.js)
## 3. login
Common login scenarios on popular website. Credentials mostly supplied with setting `ENV` variables.  
### Github
Logs into Github. Provide your username and password as environment variables when running the script, i.e: `GITHUB_USER=myuser GITHUB_PWD=mypassword node github.js`


[3. login/github.js](https://github.com/checkly/puppeteer-examples/blob/master/3.%20login/github.js)
### Google Social Login
Logs into Checkly using Google social Login. Provide your username and password as environment variables when running the script, i.e: `GOOGLE_USER=myuser GOOGLE_PWD=mypassword node google_social.js`


[3. login/google_social.js](https://github.com/checkly/puppeteer-examples/blob/master/3.%20login/google_social.js)
### Instagram
Logs into Instagram with credentials. Provide your username and password as environment variables when running the script, i.e: `INSTAGRAM_USER=myuser INSTAGRAM_PWD=mypassword node instagram.js`


[3. login/instagram.js](https://github.com/checkly/puppeteer-examples/blob/master/3.%20login/instagram.js)
### Microsoft Live Login
Logs into MS Live. Provide your username and password as environment variables when running the script, i.e: linux: MSLIVE_USER=myuser MSLIVE_PWD=mypassword node mslive.js Windows users: SET MSLIVE_USER=myuser SET MSLIVE_PWD=mypassword node mslive.js for more info see here: https://stackoverflow.com/questions/9249830/how-can-i-set-node-env-production-on-windows


[3. login/mslive.js](https://github.com/checkly/puppeteer-examples/blob/master/3.%20login/mslive.js)
## 4. shopping-carts
How to handle shopping cart functions like adding and removing items.  
### Staples shopping cart
Goes to the face paint category and adds to the shopping cart.


[4. shopping-carts/staples.js](https://github.com/checkly/puppeteer-examples/blob/master/4.%20shopping-carts/staples.js)
### Walmart shopping cart
Looks for a Nintendo's Mario Odyssey and adds it to the shopping cart.


[4. shopping-carts/walmart.js](https://github.com/checkly/puppeteer-examples/blob/master/4.%20shopping-carts/walmart.js)
## 5. parallel-pages
How to handle Allow parallel processing pages.  
### Screenshots parallel pages
Allow parallel processing screenshot


[5. parallel-pages/screenshots_parallel.js](https://github.com/checkly/puppeteer-examples/blob/master/5.%20parallel-pages/screenshots_parallel.js)
### Screenshots parallel pages in batches
parallel screenshotting of an array of Websites with small example


[5. parallel-pages/screenshots_parallel_cologne_colleges.js](https://github.com/checkly/puppeteer-examples/blob/master/5.%20parallel-pages/screenshots_parallel_cologne_colleges.js)
## A. mocha-tests
Mocha test runner scripts that use Puppeteer and the standard `assert` library to check specific properties and actions on a page. They can be executed like: 

```bash
cd "a. mocha-tests"
npx mocha alibaba.js
```  
### Alibaba product search
Searches Alibaba.com for a product and checks if the results show up


[a. mocha-tests/alibaba.js](https://github.com/checkly/puppeteer-examples/blob/master/a.%20mocha-tests/alibaba.js)
### Amazon product search
Searches Amazon.com for a product and checks if the results show up


[a. mocha-tests/amazon.js](https://github.com/checkly/puppeteer-examples/blob/master/a.%20mocha-tests/amazon.js)
### codesandbox.io
Goes to codesandbox.io, creates a new sandbox and selects the Vue.js template


[a. mocha-tests/codesandbox.js](https://github.com/checkly/puppeteer-examples/blob/master/a.%20mocha-tests/codesandbox.js)
### Duck Duck Go search
Goes to duckduckgo.com, searches for "chrome puppeteer", asserts the result and snaps a screenshots


[a. mocha-tests/duck_duck_go.js](https://github.com/checkly/puppeteer-examples/blob/master/a.%20mocha-tests/duck_duck_go.js)
### Etsy shopping cart
Goes to etsy.com, select the first knick knack and adds it to the shopping cart.


[a. mocha-tests/etsy.js](https://github.com/checkly/puppeteer-examples/blob/master/a.%20mocha-tests/etsy.js)
### Gmail signup
Checks the signup flow from the landing page. Clicks the


[a. mocha-tests/gmail.js](https://github.com/checkly/puppeteer-examples/blob/master/a.%20mocha-tests/gmail.js)
### Google search
Searches Google.com for a term and checks if the first link matches. This check should fail.


[a. mocha-tests/google.js](https://github.com/checkly/puppeteer-examples/blob/master/a.%20mocha-tests/google.js)
### Staples shopping cart
Goes to staples.com and adds a some facepaint to an empty shopping cart. Validates the correct amount.


[a. mocha-tests/staples.js](https://github.com/checkly/puppeteer-examples/blob/master/a.%20mocha-tests/staples.js)
### Walmart shopping cart
Goes to walmart.com and adds a Nintendo game to an empty shopping cart. Validates the correct amount.


[a. mocha-tests/walmart.js](https://github.com/checkly/puppeteer-examples/blob/master/a.%20mocha-tests/walmart.js)
## B. jest-tests
Jest test runner scripts that use Puppeteer to check specific properties and actions on a page. Very similar to the Mocha tests, but using the Jest `expect` assertions. Install Jest as a global dependency and run them as any other script

```bash
npm i -g jest
jest jest-tests/alibaba.js
```  
### Alibaba product search
Searches Alibaba.com for a product and checks if the results show up


[b. jest-tests/alibaba.spec.js](https://github.com/checkly/puppeteer-examples/blob/master/b.%20jest-tests/alibaba.spec.js)
### Amazon product search
Searches Amazon.com for a product and checks if the results show up


[b. jest-tests/amazon.spec.js](https://github.com/checkly/puppeteer-examples/blob/master/b.%20jest-tests/amazon.spec.js)
### codesandbox.io
Goes to codesandbox.io, creates a new sandbox and selects the Vue.js template


[b. jest-tests/codesandbox.spec.js](https://github.com/checkly/puppeteer-examples/blob/master/b.%20jest-tests/codesandbox.spec.js)
### Etsy shopping cart
Goes to etsy.com, select the first knick knack and adds it to the shopping cart.


[b. jest-tests/etsy.spec.js](https://github.com/checkly/puppeteer-examples/blob/master/b.%20jest-tests/etsy.spec.js)
### Google search
Searches Google.com for a term and checks if the first link matches. This check should fail.


[b. jest-tests/google.spec.js](https://github.com/checkly/puppeteer-examples/blob/master/b.%20jest-tests/google.spec.js)
### Walmart shopping cart
Goes to walmart.com and adds a Nintendo game to an empty shopping cart. Validates the correct amount.


[b. jest-tests/walmart.spec.js](https://github.com/checkly/puppeteer-examples/blob/master/b.%20jest-tests/walmart.spec.js)
