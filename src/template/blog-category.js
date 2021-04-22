import React from "react";
import { Link, graphql } from "gatsby";

export default function Home({ data, pageContext }) {
  console.log(pageContext);
  return (
    <section className="blog-list">
      <h2>My Blogs</h2>
      <div className="container">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
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
            cover
            date
            category
          }
        }
      }
    }
  }
`;
