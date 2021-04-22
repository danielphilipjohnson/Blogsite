import React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/header";

export default function Home({ data }) {
  // get links of category
  const categoryNav = () => {
    return data.categories.distinct.map((category) => {
      return (
        <Link to={`/${category}/`}>
          <li>{category}</li>
        </Link>
      );
    });
  };

  return (
    <div>
      <h1>Amazing Pandas Eating Things</h1>
      <h4>{data.blogs.totalCount} Posts</h4>

      <ul>{categoryNav()}</ul>
      {data.blogs.edges.map(({ node }) => (
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
  );
}

export const query = graphql`
  query {
    blogs: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
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
