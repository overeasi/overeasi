import { Selector } from 'testcafe';

class AddIntentPage {
  constructor() {
    this.pageId = '#add-intent-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const addIntentPage = new AddIntentPage();
