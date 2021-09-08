import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import BlogCards from "../../components/blog-cards";

export const query = graphql`
  query Category($slug: String!) {
    articles: allStrapiArticle(filter: { category: { slug: { eq: $slug } } }) {
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
          author {
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 30)
                }
              }
            }
          }
        }
      }
    }
    category: strapiCategory(slug: { eq: $slug }) {
      name
      description
      cover {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

const Category = ({ data }) => {
  const articles = data.articles.edges;
  const category = data.category;
  const seo = {
    metaTitle: category.name,
    metaDescription: category.description,
    shareImage: category.cover,
    article: false,
  };
  return (
    <Layout seo={seo}>
      <section className="container pt-10">
        <BlogCards blogs={articles} title={category.name} />
      </section>
    </Layout>
  );
};

export default Category;
