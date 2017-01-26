describe('Protractor Demo App', function() {
it('should have a title', function() {

browser.get('http://localhost:6001/vote');
element(by.model('user.voterName')).sendKeys('Rajesh Kanumetta');
element(by.model('user.voterEmail')).sendKeys('rkanumetta@miraclesoft.com');
element(by.model('user.voterOrganization')).sendKeys('Miracle');

browser.sleep(1000);

// element(by.css('[ng-click="vote($event)"]')).click();
// element(by.css('[ng-click="checkResult()"]')).click();
// browser.sleep(2000);

expect(browser.getTitle()).toEqual('Voter App | Angular Demo');

});
});



// describe('Protractor Demo App', function() {
// it('should have a title', function() {
// browser.get('http://localhost:6001/vote');
// element(by.model('user.voterName')).sendKeys('Srinivas');
// element(by.model('user.voterEmail')).sendKeys('Srinivas');
// element(by.model('user.voterOrganization')).sendKeys('Srinivas');
// browser.sleep(9000);
// expect(browser.getTitle()).toEqual('Voter App | Angular Demo');
// });
// });

// var elem = ptor.findElement(protractor.By.id('submitButton'));
// elem.click();
// element(by.css('[ng-click="vote($event)"]')).click();.
// element(by.css('[value="submitForm"]')).click();
// element(by.css('[ng-click="checkResult()"]')).click();
// element(by.id('submitButton')).click().then(function(){
// expect(element(by.className('row')).isDisplayed()).toBe(true);
// });

describe('Protractor Demo App', function() {
it('should have a title', function() {
browser.driver.get('http://localhost:6001/vote');
element(by.css('[ng-click="vote($event)"]')).click();
element(by.css('[ng-click="checkResult()"]')).click();
browser.sleep(1000);
});
});


