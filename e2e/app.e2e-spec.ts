import { Thandi2Page } from './app.po';

describe('thandi2 App', () => {
  let page: Thandi2Page;

  beforeEach(() => {
    page = new Thandi2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
