const protractor = require('protractor')
const data = require('./data.json')
const browser = protractor.browser
const element = protractor.element
const by = protractor.by
const Key = protractor.Key

function logIn() {
    element(by.css('button#nav-mlife')).click()
    element(by.css('input#email-widget')).sendKeys(data.logName)
    element(by.css('input#password-widget')).sendKeys(data.password)
    browser.actions().sendKeys(Key.ENTER).perform()
}

function inputGroupName() {
    element(by.id('nav-entertainment-2')).click()
    element(by.id('es-search-term')).sendKeys('Maroon 5')
}

function chooseCity() {
    element(by.id('search-location-drop')).click()
    element(by.css('li[aria-label = "Las Vegas"]')).click()
    element(by.css('li[aria-label = "MANDALAY BAY"]')).click()
}
function findGroup(){
    inputGroupName()
    chooseCity()
    element(by.css('div.search-btn')).click()
}

function getGroupName(){
    element(by.cssContainingText('a','Maroon 5')).click()
    return element(by.css('h1[itemprop]')).getText()
}

function clickResorts(){
    element(by.id('nav-resorts-1')).click()
    element(by.css('#aria > path.line')).click()
}

function getInfo(){
    element(by.css('[href ^= "/content/mgm"]')).click()
    return element(by.className('description-text')).getText()
}
module.exports = {
    logIn,
    inputGroupName,
    chooseCity,
    findGroup,
    getGroupName,
    clickResorts,
    getInfo

}