import { ToyInbodyPage } from './app.po';

describe('toy-inbody App', () => {
  let page: ToyInbodyPage;

  beforeEach(() => {
    page = new ToyInbodyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
