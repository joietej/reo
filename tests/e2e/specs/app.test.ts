// https://docs.cypress.io/api/introduction/api.html

describe("App Tests", () => {
  it("Selects one file", () => {
    cy.visit("/");
    cy.contains("button", "Select Files").click();
    cy.contains("span", "Root");
    cy.contains("li", "First to come").click();
    cy.contains("li", "2nd folder").click();
    cy.contains("li", "New Photo.png").click();
    cy.contains("button", "Select 1 File").click();
    cy.contains("li", "New Photo.png");
  });
});
