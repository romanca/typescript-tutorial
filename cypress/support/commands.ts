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

Cypress.Commands.add("themePicker", () => {
  cy.get('[data-automation="theme-btn"]').click();
  cy.wait(500);
  cy.get('[data-automation="theme-panel"] > li').eq(1).click();
  cy.wait(500);
  cy.get('[data-automation="theme-btn"]').click();
  cy.wait(500);
  cy.get('[data-automation="theme-panel"] > li').eq(2).click();
  cy.wait(500);
  cy.get('[data-automation="theme-btn"]').click();
  cy.wait(500);
  cy.get('[data-automation="theme-panel"] > li').eq(3).click();
  cy.wait(500);
  cy.get('[data-automation="theme-btn"]').click();
  cy.wait(500);
  cy.get('[data-automation="theme-panel"] > li').eq(4).click();
  cy.wait(500);
  cy.get('[data-automation="theme-btn"]').click();
  cy.wait(500);
  cy.get('[data-automation="theme-panel"] > li').eq(5).click();
  cy.wait(500);
  cy.get('[data-automation="theme-btn"]').click();
  cy.wait(500);
  cy.get('[data-automation="theme-panel"] > li').eq(0).click();
});

Cypress.Commands.add("todoItem", () => {
  cy.wait(1000);
  cy.get(
    ":nth-child(1) > .sc-iCfMLu > .sc-kDTinF > :nth-child(1) > .MuiSvgIcon-root"
  ).click();
  cy.wait(500);
  cy.get(
    ":nth-child(1) > .sc-iCfMLu > .sc-kDTinF > :nth-child(2) > .MuiSvgIcon-root"
  ).click();
  cy.wait(500);
  cy.get(
    ":nth-child(1) > .sc-iCfMLu > .sc-kDTinF > :nth-child(1) > .MuiSvgIcon-root"
  ).click();
  cy.wait(500);
  cy.get('[data-automation="priority-picker"]').click();
  cy.wait(500);
  cy.get(".sc-bBHxTw > :nth-child(1)").click();
  cy.wait(500);
  cy.get(
    ":nth-child(1) > .sc-iCfMLu > .sc-jrQzAO > .sc-kfPuZi > .sc-egiyK"
  ).type("Todo 12");
  cy.wait(500);
  cy.get(
    ":nth-child(1) > .sc-iCfMLu > .sc-kDTinF > :nth-child(1) > .MuiSvgIcon-root > path"
  ).click();
  cy.wait(500);
  cy.get(
    ":nth-child(1) > .sc-iCfMLu > .sc-kDTinF > :nth-child(2) > .MuiSvgIcon-root"
  ).click();
  cy.wait(500);
  cy.get(":nth-child(1) > .sc-iCfMLu > .sc-furwcr > .MuiSvgIcon-root").click();
  cy.wait(500);
  cy.get(".sc-hGPBjI > :nth-child(3)").click();
  cy.wait(500);
  cy.get(":nth-child(1) > .sc-iCfMLu > .sc-furwcr > .MuiSvgIcon-root").click();
  cy.wait(500);
  cy.get(".sc-hGPBjI > :nth-child(1)").click();
});
