describe("Submit", () => {
  beforeEach(() => {
    // cy.visit("https://romanca.github.io/typescript-tutorial/");
    cy.visit("http://localhost:3000/typescript-tutorial");
    cy.viewport("macbook-15");
  });

  it("Submit todo", () => {
    cy.get('[data-automation="form-btn"]').click().click().click();
  });
});
