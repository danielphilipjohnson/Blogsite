Cypress.Commands.add("getCategoryCard", () => {
  cy.get(".category-header p")
    .first()
    .then(($btn) => {
      const category = $btn.text();
      cy.get(`a[href*="${category}"]`).should("have.attr", "href");
    })
    .then((href) => {
      cy.visit(href);
    });
});

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/categories/").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.wait(500); // wait for rehydration
    cy.checkA11y();
  });
});

describe("Categories are displayed", () => {
  describe("on homepage", () => {
    it("A topic exist and can be navigated", () => {
      cy.visit("/");
      cy.wait(500); // wait for rehydration
      cy.contains(/Topics/i).should("be.visible");
      cy.getCategoryCard();
    });
  });

  describe("on catergories page", () => {
    it("A topic exist and can be navigated", () => {
      cy.visit("/categories/");
      cy.wait(500); // wait for rehydration
      cy.contains(/Topics/i).should("be.visible");
      cy.getCategoryCard();
    });
  });
});
