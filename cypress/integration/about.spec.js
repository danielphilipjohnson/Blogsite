describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/about/").get("main").injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.wait(500); // wait for rehydration
    cy.checkA11y();
  });
});
