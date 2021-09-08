import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";

import CategoriesComponent from "../components/categories";

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

function Categories() {
  // finissh seo
  const data = useStaticQuery(query);
  console.log(data);
  return (
    <>
      <Layout seo={data.strapiCatergoriespage.seo}>
        <CategoriesComponent />
      </Layout>
    </>
  );
}

export default Categories;
