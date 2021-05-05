import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Blogs from "../components/blogs";
import Categories from "../components/categories";
import Banner from "../components/banner";
import Seo from "../components/SEO";

export default function Home({ data }) {
  return (
    <>
      <Layout>
        <Seo />
        <Banner />
        <div className="pt-9 md:pt-12 container">
          <Blogs blogs={data.blogs.edges} title={"Latest Posts"} />
        </div>
        <Categories categories={data.categories.distinct} data={data} />
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    blogs: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
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
                gatsbyImageData(width: 800, height: 500)
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
