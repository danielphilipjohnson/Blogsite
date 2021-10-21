import React from "react";
import Layout from "../../components/layout";
import { graphql, useStaticQuery } from "gatsby";

import GenericCards from "../../components/generic-cards";
import HeroBanner from "../../components/hero/genericHero";
import BreadCrumb from "../../components/breadcrumb";

const query = graphql`
  query {
    allStrapiSeriespage {
      nodes {
        SEO {
          metaTitle
          metaDescription
          keywords
          shareImage {
            localFile {
              publicURL
            }
          }
        }
        Hero {
          Banner {
            localFile {
              childrenImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          Heading
          profile
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
  
  const { SEO, Hero } = data.allStrapiSeriespage.nodes[0];
  const { articles, name } = data.strapiSeries;
  
  return (
    <>
      <Layout seo={SEO}>
        <HeroBanner location={location} Hero={Hero} />
        <GenericCards name={name} articles={articles} />
      </Layout>
    </>
  );
}

export default Series;
