describe("Footer links", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Internal links exists", () => {
    cy.get("footer").within(() => {
      cy.contains(/Blogs/i).should("have.attr", "href").and("match", /blogs/);

      cy.contains(/Blog Categories/i)
        .should("have.attr", "href")
        .and("match", /categories/);

      cy.contains(/Projects/i).should("have.attr", "href");

      cy.contains(/Contact Me/i).should("have.attr", "href");

      cy.contains(/About Me/i)
        .should("have.attr", "href")
        .and("match", /about/);

      cy.contains(/Archives/i)
        .should("have.attr", "href")
        .and("match", /archives/);

      cy.contains(/Sitemap/i)
        .should("have.attr", "href")
        .and("match", /sitemap-pages.xml/);
    });
  });

  it("Visit Blogs", () => {
    cy.contains(/Blogs/i).click();
  });

  it("Visit Blog Categories", () => {
    cy.contains(/Blog Categories/i).click();
  });
  it("Visit About Me", () => {
    cy.contains(/About Me/i).click();
  });

  it("Visit Archives", () => {
    cy.contains(/Archives/i).click();
  });
  // causes an origin error
  // it("Visit Archives", () => {
  //   cy.contains(/Sitemap/i).click();
  // });
});
