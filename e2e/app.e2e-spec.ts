import { AllInOnePage } from './app.po';

describe('all-in-one App', function() {
  let page: AllInOnePage;

  beforeEach(() => {
    page = new AllInOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
