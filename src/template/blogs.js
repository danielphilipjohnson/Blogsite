import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Blogs from "../components/blogs";
import BreadCrumb from "../components/breadcrumb";
import Pagination from "../components/shared/pagination";

// missing seo and see if its still needed
export default function BlogsTemplate({ data, pageContext, location }) {
  return (
    <Layout>
      <BreadCrumb location={location} />
      <section className="container pt-10">
        <Blogs blogs={data.allStrapiArticle.nodes} title={"All blogs"} />
      </section>

      <Pagination url={"blogs"} pageContext={pageContext} />
    </Layout>
  );
}

// fect blogs from
export const blogListQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiArticle(
      
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        published_at
        title
        slug
        author {
          name
        }

        category {
          name
        }
        description
        excerpt
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      totalCount
    }
  }
`;
