import React from "react";
import Layout from "../../components/layout";
import { graphql, useStaticQuery } from "gatsby";

import CategoriesComponent from "../../components/categories";
import HeroBanner from "../../components/hero/genericHero";

const query = graphql`
  query {
    strapiCatergoriespage {
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
  }
`;

function Categories({ location }) {
  const data = useStaticQuery(query);
  const { SEO, Hero } = data.strapiCatergoriespage.Page;
  
  return (
    <>
      <Layout seo={SEO}>        
        <HeroBanner location={location} Hero={Hero} />
        <CategoriesComponent />
      </Layout>
    </>
  );
}

export default Categories;
