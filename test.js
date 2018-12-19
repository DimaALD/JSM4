const step = require('./steps')
const stepsForNpm = require('./stepsForNpm')
const protractor = require('protractor')
const data = require('./data.json')
const browser = protractor.browser
const element = protractor.element
const by = protractor.by

describe('Test entertainment', () => {

    beforeEach(()=>{
        browser.get('https://www.mgmresorts.com/en.html');
    })
    // it('Test login', ()=>{
    //     step.logIn()
    //     expect(element(by.partialButtonText('Dima'))).toEqual('Dima')
    // })
    it('Find group', () => {
    step.findGroup()
    expect(step.getGroupName()).toEqual(data.group) 
    });
});

describe('Test resorts',()=>{

    beforeEach(()=>{
        browser.get('https://www.mgmresorts.com/en.html');
    })

    it('Check info about Aria Resort',()=> {
        step.clickResorts()
        expect(step.getInfo()).toEqual(data.checkedData)
    })
})

describe('Test NPM',()=>{

    beforeEach(()=>{
        stepsForNpm.openPage()
    })

    it('Test search yargs',async ()=>{
        await stepsForNpm.logIn()
        await stepsForNpm.findLibrary()
        await expect(stepsForNpm.getLibraryName()).toEqual('Yargs')
    })
})

