const { Builder } = require('selenium-webdriver');

(async function myFunction() {
  let driver = await new Builder().forBrowser('chrome').build();

  driver.get('https://www.google.com/');
  let x = driver.findElement(
    By.xpath("//input[@aria-label = 'Google Search']")
  );
  x.click();
})();
