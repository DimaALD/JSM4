const protractor = require('protractor')
const data = require('./data.json')
const browser = protractor.browser
const until = protractor.until
const Key = protractor.Key
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000

function openPage(){
    return browser.driver.get('https://www.npmjs.com/')
}

async function logIn(){
    await browser.driver.findElement(by.css('[href = "/login"]')).click()
    await browser.driver.wait(until.elementLocated(by.css('input#login_username'))).sendKeys('dima154')
    await browser.driver.wait(until.elementLocated(by.css('input#login_password'))).sendKeys('10703214fitr')
    await browser.driver.wait(until.elementLocated((by.tagName('button')))).click()
}

async function findLibrary(){
    await browser.driver.wait(until.elementLocated(by.css('input[class]'))).sendKeys('yargs')
    await browser.driver.actions().sendKeys(Key.ENTER).perform()
    browser.driver.wait(until.elementLocated(by.css('a[href = "/package/yargs"]'))).click()
}

async function getLibraryName(){
    return  browser.driver.wait(until.elementLocated(by.css('h1[align]')),3000).getText()  
}

module.exports = {
    logIn,
    openPage,
    findLibrary,
    getLibraryName
}