import { PersonalAngularPage } from './app.po';

describe('personal-angular App', function() {
  let page: PersonalAngularPage;

  beforeEach(() => {
    page = new PersonalAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pa works!');
  });
});
