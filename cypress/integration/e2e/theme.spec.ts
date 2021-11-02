describe("ThemePicker", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/typescript-tutorial");
    cy.viewport("macbook-15");
  });

  it("Theme", () => {
    cy.themePicker();
  });
});
