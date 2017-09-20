import { LeaksWithObservablesPage } from "./app.po";

describe("leaks-with-observables App", () => {
  let page: LeaksWithObservablesPage;

  beforeEach(() => {
    page = new LeaksWithObservablesPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Welcome to app!");
  });
});
