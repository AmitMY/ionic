import {by, element} from 'protractor';

function openApp(component: string, test: string) {
  return function () {
    element(by.css('assistive-touch')).click();
    element(by.css('.home-button')).click();
    element(by.css('.component-' + component + ' .component-test-' + test + ' ion-label')).click();
  };
}

describe('action-sheet', function () {
  describe('basic', function () {
    beforeAll(openApp('action-sheet', 'basic'));

    it('should open action sheet', function () {
      element(by.css('.e2eOpenActionSheet')).click();
    });

    it('should close with backdrop click', function () {
      element(by.css('ion-backdrop')).click();
    });
  });
});