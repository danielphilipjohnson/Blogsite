import React from "react";
import Layout from "../../components/layout";
import { graphql, useStaticQuery } from "gatsby";

import CategoriesComponent from "../../components/categories";
import Hero from "../../components/hero";
import BreadCrumb from "../../components/breadcrumb";

const query = graphql`
  query {
    strapiCatergoriespage {
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

function Categories({ location }) {
  const data = useStaticQuery(query);
  return (
    <>
      <Layout seo={data.strapiCatergoriespage.seo}>
        <Hero location={location} />
        <CategoriesComponent />
      </Layout>
    </>
  );
}

export default Categories;
