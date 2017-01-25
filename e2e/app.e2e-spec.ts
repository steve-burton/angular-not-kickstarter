import { NotKickstarterPage } from './app.po';

describe('not-kickstarter App', function() {
  let page: NotKickstarterPage;

  beforeEach(() => {
    page = new NotKickstarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
