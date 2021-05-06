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
  // check content
  it("Main Heading is displayed", () => {
    cy.get("h1").contains(/Daniel Philip Johnson/i);
  });

  // find buttons

  it("Banner links exists", () => {
    cy.contains(/Get in Touch/i).should("have.attr", "href");
    cy.contains(/About Me/i).should("have.attr", "href");
  });

  it("Navigates to About", () => {
    cy.wait(500); // wait for rehydration
    cy.contains("About Me").click();
    cy.url().should("include", "/about/");
  });

  it("finds first blog and visit", () => {
    cy.wait(500); // wait for rehydration
    cy.get(".blog-link")
      .first()
      .should("have.attr", "href")
      .and("include", "blogs")
      .then((href) => {
        cy.visit(href);
      });
  });
  // check topics

  // check footer

  // cy.get('.left-nav>.nav').children().should('have.length', 8)
});
