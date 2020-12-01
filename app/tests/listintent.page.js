import { Selector } from 'testcafe';

class ListIntentPage {
  constructor() {
    this.pageId = '#list-intent-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasTable(testController) {
    const rowCount = Selector('tr').count;
    await testController.expect(rowCount).gte(2);
  }
}

export const listIntentPage = new ListIntentPage();
