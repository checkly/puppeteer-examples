# Puppeteer examples

Puppeteer Headless Chrome examples for real life use cases. Clone this repo and run them directy with a simple `node` command.

```bash
git clone https://github.com/checkly/puppeteer-examples
cd puppeteer-examples
npm i
node search/amazon.js
 ```
- [basics](#basics)
  * [emulate devices](#emulate-devices)
  * [get list of links](#get-list-of-links)
  * [get title](#get-title)
  * [hover](#hover)
  * [keyboard](#keyboard)
  * [mouse](#mouse)
  * [pdf](#pdf)
  * [screenshots](#screenshots)
  * [screenshots clipped](#screenshots-clipped)
  * [set cookie](#set-cookie)
- [login](#login)
  * [Github](#github)
- [search](#search)
  * [Amazon search](#amazon-search)
  * [Booking.com search](#booking-com-search)
  * [Youtube search](#youtube-search)


## Basics
The very basic on getting useful info from web page. Highlights the basic Puppeteer functions.  
### emulate devices
Use the built in devices descriptors to emulate an Iphone 6. These are actually shortcuts for calling page.setUserAgent() and page.setViewPort().


[basics/emulate_devices.js](https://github.com/checkly/puppeteer-examples/blob/master/basics/emulate_devices.js)
### get list of links
Scrapes Hacker News for links on the home page and returns the top 10


[basics/get_list_of_links.js](https://github.com/checkly/puppeteer-examples/blob/master/basics/get_list_of_links.js)
### get title
Get the title of a page and print it to the console.


[basics/get_title.js](https://github.com/checkly/puppeteer-examples/blob/master/basics/get_title.js)
### hover
The hover function is a combination of scrolling and putting the mouse into a hover state over the requested element. This example hovers the first track we find on the soundcloud.com homepage, which should trigger the play and like buttons to be visible


[basics/hover.js](https://github.com/checkly/puppeteer-examples/blob/master/basics/hover.js)
### keyboard
types into a text editor


[basics/keyboard.js](https://github.com/checkly/puppeteer-examples/blob/master/basics/keyboard.js)
### mouse
Most of the things you can click using straight .click() handlers, but for some situation directly instructing the mouse might be convenient. This example load a page that plays back what mouse actions are used on the page.


[basics/mouse.js](https://github.com/checkly/puppeteer-examples/blob/master/basics/mouse.js)
### pdf
Renders a PDF of the Puppeteer API spec. This is a pretty long page and will generate a nice, A4 size multi-page PDF.


[basics/pdf.js](https://github.com/checkly/puppeteer-examples/blob/master/basics/pdf.js)
### screenshots
Snaps a basic screenshot of the full New York Time homepage and saves it a .png file.


[basics/screenshots.js](https://github.com/checkly/puppeteer-examples/blob/master/basics/screenshots.js)
### screenshots clipped
Grabs and clips out just the stock tickers on the Yahoo finance page


[basics/screenshots_clipped.js](https://github.com/checkly/puppeteer-examples/blob/master/basics/screenshots_clipped.js)
### set cookie
Sets the "login_email" property in a Paypal cookie so the login screen is pre-filled with an email address.


[basics/set_cookie.js](https://github.com/checkly/puppeteer-examples/blob/master/basics/set_cookie.js)
## Login
Common login scenarios on popular website. Credentials mostly supplied with setting `ENV` variables.  
### Github
Logs into Github. Provide your username and password as environment variables when running the script, i.e: `GITHUB_USER=myuser GITHUB_PWD=mypassword node github.js`


[login/github.js](https://github.com/checkly/puppeteer-examples/blob/master/login/github.js)
## Search
Common search input and select methods on search results.  
### Amazon search
Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.


[search/amazon.js](https://github.com/checkly/puppeteer-examples/blob/master/search/amazon.js)
### Booking.com search
Finds accommodations in Berlin on Booking.com, takes a screenshot and logs the top 10.


[search/booking.js](https://github.com/checkly/puppeteer-examples/blob/master/search/booking.js)
### Youtube search
Looks for Fleetwood Mac's "Dreams" video on youtube.com and clicks on the third video. Waits for 5 seconds for the video to load.


[search/youtube.js](https://github.com/checkly/puppeteer-examples/blob/master/search/youtube.js)
