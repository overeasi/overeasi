import { Selector } from 'testcafe';

class WelcomeModalPage {
  constructor() {
    this.pageId = '#welcome-modal-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const welcomeModalPage = new WelcomeModalPage();
