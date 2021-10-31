import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../../components/layout";
import SeriesPage from "../../components/page-template";

const query = graphql`
  query {
    strapiTutorialPage {
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

    strapiTutorial {
      articles {
        author
        title
        slug
        category
        description
        excerpt
        published_at
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
          alternativeText
        }
      }
      name
    }
  }
`;

function Series({ location }) {
  const data = useStaticQuery(query);
  const { SEO, Hero } = data.strapiTutorialPage.Page;
  const { articles, name } = data.strapiTutorial;

  return (
    <>
      <Layout seo={SEO}>
        <SeriesPage
          location={location}
          Hero={Hero}
          name={name}
          articles={articles}
        />
      </Layout>
    </>
  );
}

export default Series;
