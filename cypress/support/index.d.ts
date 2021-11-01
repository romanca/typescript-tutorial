declare namespace Cypress {
  interface Chainable {
    createTodo(): Chainable<Element>;
  }
}
