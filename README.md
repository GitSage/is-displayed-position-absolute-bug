# Selenium bug involving isDisplayed()

Calling `isDisplayed()` on a span or div with no contents normally results in `false`. However, if the element has the styles `position: absolute`, `top=0`, `bottom=0`, `left=0`, and `right=0`, calling isDisplayed on it will result in `true`. Omitting any of these styles will result in `false` as expected. 

### Reproduction 

1. Have `geckodriver.exe` on your `PATH`. 
1. Clone this repo.
1. Serve the HTML file (for example with `http-server` package)
1. Run `node index.js`

What I see: Selenium reports that `absolute-top-bottom-left-right` is displayed. All the other examples report not displayed.
What I expect to see: Selenium reports none of the elements are displayed.

Tested on Windows 10 with IE11, Chrome, Firefox.