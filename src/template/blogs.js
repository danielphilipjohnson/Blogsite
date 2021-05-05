import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/SEO";
import Blogs from "../components/blogs";

export default function BlogsTemplate({ data, pageContext }) {
  const isPreviousBlogs = () => {
    if (pageContext.currentPage > 1) {
      return true;
    }
  };

  const PreviousBlogLink = () => {
    if (pageContext.currentPage <= 2) {
      return `/blogs/`;
    } else {
      return `/blogs/${pageContext.currentPage - 1}`;
    }
  };

  const isMoreBlogs = () => {
    if (pageContext.currentPage < pageContext.numPages) {
      return true;
    }
  };

  const NextBlogLink = () => {
    return `/blogs/${pageContext.currentPage + 1}`;
  };

  return (
    <Layout>
      <Seo />
      <section className="container pt-10">
        <Blogs blogs={data.allMarkdownRemark.edges} title={"All blogs"} />
      </section>
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
                  formats: [AUTO, WEBP, PNG]
                )
              }
            }
          }
        }
      }
    }
  }
`;
