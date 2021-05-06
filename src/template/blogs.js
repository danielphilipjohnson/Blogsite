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
      <nav
        className="w-full flex justify-center pb-5"
        role="navigation"
        aria-label="Pagination Navigation"
      >
        <ul>
          {isPreviousBlogs() && (
            <li className="border border-black px-4 py-2 mr-2">
              <a href={PreviousBlogLink()}>Previous</a>
            </li>
          )}
          {isMoreBlogs() && (
            <li className="border border-black px-4 py-2 mr-2">
              <a href={NextBlogLink()}>Next</a>
            </li>
          )}
        </ul>
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
