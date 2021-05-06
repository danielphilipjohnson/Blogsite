import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ArchiveBlogs from "../components/archive-blogs";
import Seo from "../components/SEO";

export default function Home({ data }) {
  const description = `Blog archives of all my blogs ranging from react, career development, reflection and tips on how to improve as a developer`;

  return (
    <>
      <Layout>
        <Seo
          keywords={
            "Blog Archive Daniel Philip Johnson, react developer, Front-End Engineer, London, web development"
          }
          title={"Blog Archives"}
          description={description}
        />

        <div className="pt-2 md:pt-8 container pb-12">
          <ArchiveBlogs
            blogs={data.blogs.edges}
            count={data.blogs.totalCount}
            title={"Blogs from Daniel — Archive"}
          />
        </div>
      </Layout>
    </>
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
            category
            cover {
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  height: 500
                  formats: [AUTO, WEBP, AVIF, PNG]
                )
              }
            }
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
