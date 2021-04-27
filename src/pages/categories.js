import React from "react";
import { Link, graphql } from "gatsby";
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
    blogs: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
          }

          excerpt
        }
      }
    }
    categories: allMarkdownRemark {
      distinct(field: frontmatter___category)
    }
  }
`;
