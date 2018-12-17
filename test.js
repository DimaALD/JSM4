const step = require('./steps')
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000
const protractor = require('protractor')
const data = require('./data.json')
const browser = protractor.browser
const element = protractor.element
const by = protractor.by

beforeEach(()=>{
    browser.get('https://www.mgmresorts.com/en.html');
})

describe('Test entertainment', () => {
    it('Find group', () => {
    step.findGroup()
    expect(step.getGroupName()).toEqual(data.group) 
    browser.sleep(5000)
    });
});

describe('Test resorts',()=>{
    it('Check info about Aria Resort',()=>{
        step.clickResorts()
        expect(step.getInfo()).toEqual(data.checkedData)
    })
})

