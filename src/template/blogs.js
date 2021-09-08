import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Blogs from "../components/blogs";
import Pagination from "../components/shared/pagination";

// missing seo and see if its still needed
export default function BlogsTemplate({ data, pageContext }) {
  return (
    <Layout>
      <section className="container pt-10">
        <Blogs blogs={data.allMarkdownRemark.edges} title={"All blogs"} />
      </section>

      <Pagination url={"blogs"} pageContext={pageContext} />
    </Layout>
  );
}

export const blogListQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            id
            title
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
