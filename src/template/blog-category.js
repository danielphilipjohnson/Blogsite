import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/SEO";
import Blogs from "../components/blogs";

export default function BlogCategory({ data, pageContext }) {
  const isPreviousBlogs = () => {
    if (pageContext.currentPage > 1) {
      return true;
    }
  };

  const PreviousBlogLink = () => {
    if (pageContext.currentPage <= 2) {
      return `/${pageContext.category}/`;
    } else {
      return `/${pageContext.category}/${pageContext.currentPage - 1}`;
    }
  };

  const isMoreBlogs = () => {
    if (pageContext.currentPage < pageContext.numPages) {
      return true;
    }
  };

  const NextBlogLink = () => {
    return `/${pageContext.category}/${pageContext.currentPage + 1}`;
  };

  return (
    <Layout>
      <Seo />
      <section className="container pt-10">
        <Blogs
          blogs={data.allMarkdownRemark.edges}
          title={pageContext.category}
        />

        <nav className="w-full flex justify-center mb-5">
          {isPreviousBlogs() && (
            <a
              className="border border-black px-4 py-2 mr-2"
              href={PreviousBlogLink()}
            >
              Previous
            </a>
          )}
          {isMoreBlogs() && (
            <a
              className="border border-black px-4 py-2 mr-2"
              href={NextBlogLink()}
            >
              Next
            </a>
          )}
        </nav>
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
                gatsbyImageData(width: 800)
              }
            }
          }
        }
      }
    }
  }
`;
