import { Selector } from 'testcafe';

class ListReportPage {
  constructor() {
    this.pageId = '#list-report-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasTable(testController) {
    const rowCount = Selector('tr').count;
    await testController.expect(rowCount).gte(1);
  }
}

export const listReportPage = new ListReportPage();
