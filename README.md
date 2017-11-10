# Puppeteer examples

Puppeteer Headless Chrome examples for real life use cases. Clone this repo and run them directy with a simple `node` command.

- [basics](#basics)
  * [emulate devices](#emulate devices)
  * [get list of links](#get list of links)
  * [get title](#get title)
  * [hover](#hover)
  * [keyboard](#keyboard)
  * [mouse](#mouse)
  * [pdf](#pdf)
  * [screenshots](#screenshots)
  * [screenshots clipped](#screenshots clipped)
  * [set cookie](#set cookie)
- [login](#login)
  * [Github](#Github)
- [search](#search)
  * [Amazon search](#Amazon search)
  * [Booking.com search](#Booking.com search)
  * [Youtube search](#Youtube search)


## basics
The very basic on getting useful info from web page. Highlights the basic Puppeteer functions.  
### [emulate devices](https://github.com/checkly/puppeteer-examples/blob/master/basics/emulate_devices.js)  
Use the built in devices descriptors to emulate an Iphone 6. These are actually shortcuts for calling page.setUserAgent() and page.setViewPort().
### [get list of links](https://github.com/checkly/puppeteer-examples/blob/master/basics/get_list_of_links.js)  
Scrapes Hacker News for links on the home page and returns the top 10
### [get title](https://github.com/checkly/puppeteer-examples/blob/master/basics/get_title.js)  
Get the title of a page and print it to the console.
### [hover](https://github.com/checkly/puppeteer-examples/blob/master/basics/hover.js)  
The hover function is a combination of scrolling and putting the mouse into a hover state over the requested element. This example hovers the first track we find on the soundcloud.com homepage, which should trigger the play and like buttons to be visible
### [keyboard](https://github.com/checkly/puppeteer-examples/blob/master/basics/keyboard.js)  
types into a text editor
### [mouse](https://github.com/checkly/puppeteer-examples/blob/master/basics/mouse.js)  
Most of the things you can click using straight .click() handlers, but for some situation directly instructing the mouse might be convenient. This example load a page that plays back what mouse actions are used on the page.
### [pdf](https://github.com/checkly/puppeteer-examples/blob/master/basics/pdf.js)  
Renders a PDF of the Puppeteer API spec. This is a pretty long page and will generate a nice, A4 size multi-page PDF.
### [screenshots](https://github.com/checkly/puppeteer-examples/blob/master/basics/screenshots.js)  
Snaps a basic screenshot of the full New York Time homepage and saves it a .png file.
### [screenshots clipped](https://github.com/checkly/puppeteer-examples/blob/master/basics/screenshots_clipped.js)  
Grabs and clips out just the stock tickers on the Yahoo finance page
### [set cookie](https://github.com/checkly/puppeteer-examples/blob/master/basics/set_cookie.js)  
Sets the "login_email" property in a Paypal cookie so the login screen is pre-filled with an email address.
## login
Common login scenarios on popular website. Credentials mostly supplied with setting `ENV` variables.  
### [Github](https://github.com/checkly/puppeteer-examples/blob/master/login/github.js)  
Logs into Github. Provide your username and password as environment variables when running the script, i.e: `GITHUB_USER=myuser GITHUB_PWD=mypassword node github.js`
## search
Common search input and select methods on search results.  
### [Amazon search](https://github.com/checkly/puppeteer-examples/blob/master/search/amazon.js)  
Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.
### [Booking.com search](https://github.com/checkly/puppeteer-examples/blob/master/search/booking.js)  
Finds accommodations in Berlin on Booking.com, takes a screenshot and logs the top 10.
### [Youtube search](https://github.com/checkly/puppeteer-examples/blob/master/search/youtube.js)  
Looks for Fleetwood Mac's "Dreams" video on youtube.com and clicks on the third video. Waits for 5 seconds for the video to load.
