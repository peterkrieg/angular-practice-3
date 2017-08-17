import { AngularPracticeThreePage } from './app.po';

describe('angular-practice-three App', () => {
  let page: AngularPracticeThreePage;

  beforeEach(() => {
    page = new AngularPracticeThreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
