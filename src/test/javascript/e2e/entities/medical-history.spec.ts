import { browser, element, by, $ } from 'protractor';

describe('MedicalHistory e2e test', () => {

    const username = element(by.id('username'));
    const password = element(by.id('password'));
    const entityMenu = element(by.id('entity-menu'));
    const accountMenu = element(by.id('account-menu'));
    const login = element(by.id('login'));
    const logout = element(by.id('logout'));

    beforeAll(() => {
        browser.get('/');

        accountMenu.click();
        login.click();

        username.sendKeys('admin');
        password.sendKeys('admin');
        element(by.css('button[type=submit]')).click();
        browser.waitForAngular();
    });

    it('should load MedicalHistories', () => {
        entityMenu.click();
        element.all(by.css('[routerLink="medical-history"]')).first().click().then(() => {
            const expectVal = /Medical Histories/;
            element.all(by.css('h2 span')).first().getText().then((value) => {
                expect(value).toMatch(expectVal);
            });
        });
    });

    it('should load create MedicalHistory dialog', function () {
        element(by.css('button.create-medical-history')).click().then(() => {
            const expectVal = /Create or edit a Medical History/;
            element.all(by.css('h4.modal-title')).first().getText().then((value) => {
                expect(value).toMatch(expectVal);
            });

            element(by.css('button.close')).click();
        });
    });

    afterAll(function () {
        accountMenu.click();
        logout.click();
    });
});
