import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import CategoriesComponent from "../components/categories";
function Categories({ data }) {
  return (
    <>
      <Layout>
        <CategoriesComponent categories={data.categories.distinct} />
      </Layout>
    </>
  );
}

export default Categories;
export const query = graphql`
  query {
    categories: allMarkdownRemark {
      distinct(field: frontmatter___category)
    }
  }
`;
