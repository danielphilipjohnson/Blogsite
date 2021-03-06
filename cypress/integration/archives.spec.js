describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/archives/").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.wait(500); // wait for rehydration
    cy.checkA11y();
  });
});

describe("archives page", () => {
  beforeEach(() => {
    cy.visit("/archives/");
  });

  it("Main Heading is displayed", () => {
    cy.get("h1").contains(/Blogs From Daniel — Archive/i);
  });

  it("Archive link exists", () => {
    cy.get(".archive-link")
      .first()
      .should("have.attr", "href")
      .and("include", "/blogs/")
      .then((href) => {
        cy.visit(href);
      });
  });

  it("Archive link count", () => {
    cy.get(".archive-link span").first().contains(/#/i);
  });
});
