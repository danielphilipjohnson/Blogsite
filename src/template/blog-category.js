import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Blogs from "../components/blogs";
import Pagination from "../components/shared/pagination";

export default function BlogCategory({ data, pageContext }) {
  // missing seo

  return (
    <Layout>
      <section className="container pt-10">
        <Blogs
          blogs={data.allMarkdownRemark.edges}
          title={pageContext.category}
        />
        <Pagination url={pageContext.category} pageContext={pageContext} />
      </section>
    </Layout>
  );
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!, $category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          excerpt
          id
          timeToRead
          fields {
            slug
          }
          frontmatter {
            id
            title
            date
            category
            cover {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF, PNG]
                )
              }
            }
          }
        }
      }
    }
  }
`;
