import React from "react";
import { Link, graphql } from "gatsby";

export default function Home({ data, pageContext }) {
  console.log(pageContext);
  return <div>working</div>;
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
          frontmatter {
            id
            title
            cover
            date
            category
          }
        }
      }
    }
  }
`;
