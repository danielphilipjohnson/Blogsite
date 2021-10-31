import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BlogCards from "../../components/blog-cards";

const Blogs = ({ title }) => {
  const data = useStaticQuery(query);
  const articles = data.articles.edges;

  return (
    <section className="mx-auto px-8 py-16 max-w-7xl">
      <BlogCards blogs={articles} title={title} />
    </section>
  );
};


export const query = graphql`
  query {
    articles: allStrapiArticle(
      sort: { order: ASC, fields: published_at }
      limit: 2
    ) {
      edges {
        node {
          slug
          title
          category {
            name
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 660)
              }
            }
          }
        }
      }
    }
  }
`;

export default Blogs;
