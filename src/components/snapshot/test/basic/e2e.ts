import {by, element} from 'protractor';

const assistive = element(by.css('assistive-touch'));

function closeApp() {
  assistive.click();
  element(by.css('.home-button')).click();
}

function openApp(component: string, test: string) {
  return () => element(by.css('.component-' + component + ' .component-test-' + test + ' ion-label')).click();
}

describe('snapshot basic', function () {
  beforeEach(closeApp);
  describe('action-sheet', function () {
    describe('basic', function () {
      beforeAll(openApp('action-sheet', 'basic'));

      it('should open action sheet', function() {
        element(by.css('.e2eOpenActionSheet')).click();
      });

      it('should close with backdrop click', function() {
        element(by.css('ion-backdrop')).click();
      });
    });
  });
});