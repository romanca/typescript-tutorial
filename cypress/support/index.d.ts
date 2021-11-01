declare namespace Cypress {
  interface Chainable {
    createTodo(): Chainable<Element>;
    filter(): Chainable<Element>;
  }
}
