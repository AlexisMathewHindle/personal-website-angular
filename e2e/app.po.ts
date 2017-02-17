import { browser, element, by } from 'protractor';

export class PersonalAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pa-root h1')).getText();
  }
}
