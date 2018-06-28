module.exports = function() {

    this.Given(/^I am in the Rocket home page$/, function () {
        return pending;


    });
    this.Then(/^click on the general channel/, function () {

        browser.key(['Enter']);

    });

    this.Then(/^send message in chat/, function () {
        browser.keys("hello");
        browser.keys(['Enter']);

    });






}
