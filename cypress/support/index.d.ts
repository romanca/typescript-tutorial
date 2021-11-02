declare namespace Cypress {
  interface Chainable {
    createTodo(): Chainable<Element>;
    filter(): Chainable<Element>;
    priorityPicker(): Chainable<Element>;
    themePicker(): Chainable<Element>;
  }
}
