// https://docs.cypress.io/api/introduction/api.html

describe("App Tests", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("button", "Select Files");
  });
});
