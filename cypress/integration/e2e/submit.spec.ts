describe("Submit", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/typescript-tutorial");
    cy.viewport("macbook-15");
  });

  it("Submit todo", () => {
    cy.createTodo();
  });
});
