import { FabonaccitestPage } from './app.po';

describe('fabonaccitest App', () => {
  let page: FabonaccitestPage;

  beforeEach(() => {
    page = new FabonaccitestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
