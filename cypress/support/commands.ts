Cypress.Commands.add("createTodo", () => {
  cy.get('[data-automation="form-btn"]').click().click().click();
  cy.wait(500);
  cy.get('[data-automation="submit-form-input"]').type("Todo 6");
  cy.wait(500);
  cy.get('[data-automation="priority-picker"]').click();
  cy.wait(500);
  cy.get(".sc-bBHxTw > :nth-child(1)").click();
  cy.wait(500);
  cy.get('[data-automation="cancel-btn"]').click();
  cy.wait(500);
  cy.get('[data-automation="form-btn"]').click();
  cy.wait(500);
  cy.get('[data-automation="submit-form-input"]').type("Todo 6");
  cy.wait(500);
  cy.get('[data-automation="priority-picker"]').click();
  cy.wait(500);
  cy.get(".sc-bBHxTw > :nth-child(1)").click();
  cy.wait(500);
  cy.get('[data-automation="add-btn"]').click();
});

Cypress.Commands.add("filter", () => {
  cy.get('[data-automation="filter-btn"]').click({ multiple: true });
});

Cypress.Commands.add("priorityPicker", () => {
  cy.get('[data-automation="form-btn"]').click();
  cy.wait(500);
  cy.get('[data-automation="priority-picker"]').click().click().click();
  cy.wait(500);
  cy.get(".sc-bBHxTw > :nth-child(1)").click();
  cy.wait(500);
  cy.get('[data-automation="priority-picker"]').click();
  cy.wait(500);
  cy.get(".sc-bBHxTw > :nth-child(2)").click();
  cy.wait(500);
  cy.get('[data-automation="priority-picker"]').click();
  cy.wait(500);
  cy.get(".sc-bBHxTw > :nth-child(3)").click();
  cy.wait(500);
  cy.get('[data-automation="priority-picker"]').click();
  cy.wait(500);
  cy.get(".sc-bBHxTw > :nth-child(4)").click();
});
