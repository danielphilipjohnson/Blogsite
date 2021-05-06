Cypress.Commands.add("getBlog", () => {
  cy.get(".blog-link")
    .first()
    .should("have.attr", "href")
    .and("include", "blogs")
    .then((href) => {
      cy.visit(href);
    });
});

describe("Blogs are displayed", () => {
  describe("on home page", () => {
    it("finds first blog and visit", () => {
      cy.visit("/");
      cy.wait(500); // wait for rehydration
      cy.getBlog();
    });
  });

  describe("on blogs page", () => {
    it("finds first blog and visit", () => {
      cy.visit("/blogs/");
      cy.wait(500); // wait for rehydration
      cy.getBlog();
    });
  });
});
