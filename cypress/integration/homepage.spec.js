describe("Site works", () => {
  it('finds the content "type"', () => {
    cy.visit("/");
    cy.wait(500); // wait for rehydration
    cy.contains("About Me").click();
  });
});

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Nav link exists and works", () => {
    cy.contains(/DPJ/i).should("have.attr", "href");
    cy.contains(/DPJ/i).click();
  });

  // check content
  it("Main Heading is displayed", () => {
    cy.get("h1").contains(/Daniel Philip Johnson/i);
  });

  it("Banner links exists", () => {
    cy.contains(/Get in Touch/i).should("have.attr", "href");
    cy.contains(/About Me/i).should("have.attr", "href");
  });

  it("Navigate to About", () => {
    cy.wait(500); // wait for rehydration
    cy.contains("About Me").click();
    cy.url().should("include", "/about/");
  });

  // it("finds first blog and visit", () => {
  //   cy.wait(500); // wait for rehydration
  //   cy.get(".blog-link")
  //     .first()
  //     .should("have.attr", "href")
  //     .and("include", "blogs")
  //     .then((href) => {
  //       cy.visit(href);
  //     });
  // });
});
