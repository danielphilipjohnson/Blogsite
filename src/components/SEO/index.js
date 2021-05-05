import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import SchemaOrg from "./schema-org";
import config from "../../../config/website";
import defaultMetaImage from "../../../static/metaImage.png";

function Seo({
  siteMetadata: seo,
  postData = postData || {},
  pageData = {},
  metaImage,
  isBlogPost,
  frontmatter = {},
  keywords = frontmatter.keywords || config.keywords,
  title = frontmatter.title || config.siteTitle,
  description = frontmatter.description || seo.description,
  image = `${seo.canonicalUrl}${metaImage || defaultMetaImage}`,
  url = `${seo.canonicalUrl}${pageData.slug || ""}`,
  datePublished = isBlogPost ? frontmatter.datePublished : false,
}) {
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="keywords" content={keywords} />
        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={seo.social.fbAppID} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.social.twitterHandle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={seo.canonicalUrl}
        author={seo.author}
        organization={seo.organization}
        defaultTitle={seo.title}
      />
    </>
  );
}

function SEOWithQuery(props) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          image
          keywords
          author {
            name
          }
          organization {
            name
            url
            logo
          }
          social {
            fbAppID
            twitterHandle
            twitter
          }
        }
      }
    }
  `);
  return <Seo siteMetadata={siteMetadata} {...props} />;
}

SEOWithQuery.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  metaImage: PropTypes.string,
};

SEOWithQuery.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
  metaImage: null,
};

export default SEOWithQuery;
