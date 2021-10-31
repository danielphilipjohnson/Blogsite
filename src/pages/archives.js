import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ArchiveBlogs from "../components/archive-blogs";

export default function Home({ data }) {
  const articles = data.allStrapiArticle.nodes;

  return (
    <>
      <Layout seo={data.strapiArchivepage.seo}>
        <div className="mx-auto px-8 lg:px-32 xl:px-48 py-16 max-w-7xl">
          <ArchiveBlogs
            blogs={articles}
            count={data.allStrapiArticle.totalCount}
            title={"Blogs from Daniel — Archive"}
          />
        </div>
      </Layout>
    </>
  );
}

export const query = graphql`
  query {

    allStrapiArticle {
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
  
    strapiArchivepage {
      seo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
        keywords
      }
    }
  }
`;
