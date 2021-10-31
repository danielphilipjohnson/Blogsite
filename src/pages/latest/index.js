import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../../components/layout";
import SeriesPage from "../../components/page-template";

const query = graphql`
  query {
    strapiLatestPage {
      Page {
        Seo {
          metaTitle
          keywords
          SharedImage {
            media {
              localFile {
                publicURL
              }
            }
          }
        }
        Hero {
          Banner {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          Heading
          description
        }
      }
    }

    allStrapiArticle(limit: 10) {
      nodes {
        author {
          name
        }
        title
        slug
        published_at
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
    }
  }
`;

function Series({ location }) {
  const data = useStaticQuery(query);
  const { SEO, Hero } = data.strapiLatestPage.Page;
  const articles = data.allStrapiArticle.nodes;

  return (
    <>
      <Layout seo={SEO}>
        <SeriesPage
          location={location}
          Hero={Hero}
          name={"Latest"}
          articles={articles}
        />
      </Layout>
    </>
  );
}

export default Series;
