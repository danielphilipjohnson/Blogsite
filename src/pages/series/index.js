import React from "react";
import Layout from "../../components/layout";
import { graphql, useStaticQuery } from "gatsby";

import GenericCards from "../../components/generic-cards";
import HeroBanner from "../../components/hero/genericHero";
import SeriesPage from "../../components/page-template";

const query = graphql`
  query {
    strapiSeriespage {
      SEO {
        keywords
        metaDescription
        metaTitle
        preventIndexing
        shareImage {
          localFile {
            publicURL
          }
        }
      }
      Hero {
        Heading
        description
        Banner {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
    strapiSeries {
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

  const { SEO, Hero } = data.strapiSeriespage;
  const { articles, name } = data.strapiSeries;

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
