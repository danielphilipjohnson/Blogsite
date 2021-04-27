import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Blogs from "../components/blogs";
import Categories from "../components/categories";

export default function Home({ data }) {
  return (
    <>
      <Layout>
        <Blogs blogs={data.blogs.edges} title={"Latest Posts"} />
        <Categories categories={data.categories.distinct} />
      </Layout>
    </>
  );
}

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
