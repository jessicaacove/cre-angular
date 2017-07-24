import { CreAngularPage } from './app.po';

describe('cre-angular App', () => {
  let page: CreAngularPage;

  beforeEach(() => {
    page = new CreAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
