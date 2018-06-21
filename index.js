const {Builder, By} = require('selenium-webdriver');

(async () => {
	let driver = await new Builder()
		.forBrowser('firefox')
		.build();

	await driver.get('http://127.0.0.1:8081/selenium_bug.html');

	let isDisplayed5 = await driver.findElement(By.id('none')).isDisplayed();
	console.log(`none: ${isDisplayed5}`);

	let isDisplayed1 = await driver.findElement(By.id('absolute-top-bottom-left')).isDisplayed();
	console.log(`absolute-top-bottom-left: ${isDisplayed1}`);

	let isDisplayed2 = await driver.findElement(By.id('absolute-top-bottom-right')).isDisplayed();
	console.log(`absolute-top-bottom-right: ${isDisplayed2}`);

	let isDisplayed3 = await driver.findElement(By.id('absolute-top-left-right')).isDisplayed();
	console.log(`absolute-top-left-right: ${isDisplayed3}`);

	let isDisplayed4 = await driver.findElement(By.id('absolute-bottom-left-right')).isDisplayed();
	console.log(`absolute-bottom-left-right: ${isDisplayed4}`);

	let isDisplayedVisible = await driver.findElement(By.id('absolute-top-bottom-left-right')).isDisplayed();
	console.log(`absolute-top-bottom-left-right: ${isDisplayedVisible}`);

	await driver.quit();
})();