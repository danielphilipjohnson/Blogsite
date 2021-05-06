import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/SEO";
import CategoriesComponent from "../components/categories";

function Categories({ data }) {
  const categories = data.categories.distinct;

  let keywords = "";
  categories.map((keyword, index) => {
    if (index === categories.length - 1) {
      return (keywords += `${keyword}`);
    }
    return (keywords += `${keyword}, `);
  });

  return (
    <>
      <Layout>
        <Seo keywords={keywords} title={"Front-End Engineer blog categories"} />
        <CategoriesComponent categories={data.categories.distinct} />
      </Layout>
    </>
  );
}

export default Categories;

export const query = graphql`
  query categoryQuery {
    categories: allMarkdownRemark {
      distinct(field: frontmatter___category)
    }
  }
`;
