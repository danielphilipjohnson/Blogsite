import React from "react";
import { Link, graphql } from "gatsby";

export default function Home({ data, pageContext }) {
  console.log(pageContext);
  const isPreviousBlogs = () => {
    if (pageContext.currentPage > 1) {
      return true;
    }
  };
  // need to be dynamic
  const PreviousBlogLink = () => {
    if (pageContext.currentPage <= 2) {
      return `/${pageContext.category}/`;
    } else {
      return `/${pageContext.category}/${pageContext.currentPage - 1}`;
    }
  };

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
      <nav className="blog-nav nav nav-justified my-5">
        {isPreviousBlogs() && (
          <a
            className="nav-link-prev nav-item nav-link  rounded-left"
            href={PreviousBlogLink()}
          >
            Previous
            <i className="arrow-prev fas fa-long-arrow-alt-left"></i>
          </a>
        )}
      </nav>
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
