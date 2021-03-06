import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Nav from "./nav";
import Seo from "../SEO";
import Footer from "./footer";

const Layout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          seo {
            metaTitle
            metaDescription
            shareImage {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Seo seo={seo} />
        <Nav />
        <main className="bg-gray-50">{children}</main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
