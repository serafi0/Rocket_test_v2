module.exports = function() {

    this.When(/^I click on register a new account$/, function () {
        browser.waitForExist('#login-card > div:nth-child(4) > button', 15000)
        browser.click('#login-card > div:nth-child(4) > button');
        //clicks on "register a new account"

    });

    this.When(/^I Enter new user name "([^"]*)"$/, function (UserName) {

        browser.setValue('#name', UserName)
    });

    this.When(/^I enter email adress "([^"]*)"$/, function (mail) {
        browser.setValue('#email', mail)
    });


    this.When(/^I enter new password "([^"]*)"$/, function (password) {

        browser.setValue('#pass', password)
        browser.setValue('#confirm-pass', password)

    });
    this.When(/^I confirm new password "([^"]*)"$/, function (password) {

        browser.setValue('#pass', password)
        browser.setValue('#confirm-pass', password)

    });
    this.When(/^I click on the register button$/, function () {
        browser.click('#login-card > div.submit > button')
    });


    this.Then(/^I creat a new account$/, function () {

        browser.waitForExist('#rocket-chat > aside > header > div.sidebar__header-thumb > div.avatar', 16000);
        //confirms user is in home page.
    });

    this.Then(/^I get error message the entered is invalid$/, function () {
        browser.waitForExist('#login-card > div.fields > div:nth-child(1) > label > div > div', 5000);


    });

    this.Then(/^I get error message the email entered is invalid$/, function () {
        browser.waitForExist('#login-card > div.fields > div:nth-child(2) > label > div > div', 5000);


    });

    this.Then(/^I get Error message the password must not be empty$/, function () {
        browser.waitForExist('#login-card > div.fields > div:nth-child(3) > label > div > div', 5000);


    });

    this.Then(/^I get error message The password confirmation does not match password$/, function () {
        browser.waitForExist('#login-card > div.fields > div:nth-child(4) > label > div > div', 5000);


    });





}










