





module.exports = function() {
    this.Given(/^I have visited Rocket login page$/, function () {
        browser.url('https://open.rocket.chat/home')
    });


    this.When(/^I Enter user name "([^"]*)"$/, function (email) {
        const e = client.waitForExist('#login-card > div.submit > button', 16000);//wait until the login button loads
        expect(e).toBe(true);
        browser.setValue('#emailOrUsername', email);

    });

    this.When(/^Enter "([^"]*)"$/, function (password) {

        browser.setValue('#pass', password);
        browser.click('#login-card > div.submit > button');
    });


    this.Then(/^check I am in the home page$/, function () {
       var check_login= client.waitForExist('#rocket-chat > aside > header > div.sidebar__header-thumb > div.avatar',17000);
       expect(check_login).toBe(true);
    });



    this.When(/^I press on the google icon$/, function () {
            browser.click('#login-card > div.oauth-login.buttons-group > button.button.external-login.google');
        });

    this.Then(/^logout$/, function () {

        browser.waitForExist('#rocket-chat > aside > header > div.sidebar__header-thumb > div.avatar',16000);

        browser.click('#rocket-chat > aside > header > div.sidebar__header-thumb > div.avatar > img');
        browser.click('body > div.rc-popover.rc-popover--sidebar-header > div > div > ul:nth-child(4) > li:nth-child(2)');

    });

    this.When(/^press Enter$/, function () {

        browser.keys('[Enter]');

    });

    this.Then(/^I get an error$/, function () {
        browser.waitForExist('.input-error');

    });






}