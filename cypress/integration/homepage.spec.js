describe("Site works", () => {
  it('finds the content "type"', () => {
    cy.visit("/");
    cy.wait(500); // wait for rehydration
    cy.contains("About Me").click();
    cy.url().should("include", "/about/");
    //
    //     cy.contains('type').click()
    // // Should be on a new URL which includes '/commands/actions'
  });
});

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it('Navigates to About"', () => {
    cy.wait(500); // wait for rehydration
    cy.contains("About Me").click();
    cy.url().should("include", "/about/");
  });
});
