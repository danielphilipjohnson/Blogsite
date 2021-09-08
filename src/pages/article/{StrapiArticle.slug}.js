import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from "react-moment";
import Layout from "../../components/layout";
import Markdown from "react-markdown";
import "./blog-styles.css";

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      strapiId
      title
      description
      content
      category {
        name
      }
      tags
      published_at
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
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
`;

// tags
const Article = ({ data }) => {
  const article = data.strapiArticle;
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    keywords: article.tags,
    article: true,
  };

  return (
    <Layout seo={seo}>
      <article className="container py-4">
        <span
          className="bg-gradient-to-r from-blue-700 to-green-800 
        w-max font-medium text-white block uppercase 
        py-4 px-2 md:text-4xl rounded mb-4"
        >
          {article.category.name}
        </span>
        <header className="mb-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight md:leading-snug">
            {article.title}
          </h1>
          <p>Created by {article.author.name}</p>
          <div className="meta">
            <p className="date mt-2">
              Last updated on
              {/*  */}
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
            {/* <p className="time mt-2">{cupsOfCoffee(post)} min read </p> */}
          </div>
        </header>
        <figure className="mb-4">
          <a href="https://github.com/danielphilipjohnson">
            <GatsbyImage
              class="w-full shadow-lg object-cover rounded-lg"
              alt={`Picture for ${article.title} article`}
              image={article.image.localFile.childImageSharp.gatsbyImageData}
              layout="fullWidth"
            />
          </a>
          <figcaption className="mt-2 text-center image-caption">
            <p className="pt-3">
              <span className="mr-2">Image Credit:</span>
              <a
                className="font-bold"
                href="https://unsplash.com/"
                target="_blank"
                rel="noreferrer"
              >
                {/* alternativeText */}
                {/* {post.frontmatter.imageCredit} */}
              </a>
            </p>
          </figcaption>
        </figure>
        <div className="custom-blog">
          <Markdown children={article.content} escapeHtml={false} />
        </div>

        {/* <div>
          {article.author.picture && (
            <GatsbyImage
              image={
                article.author.picture.localFile.childImageSharp.gatsbyImageData
              }
              alt={`Picture of ${article.author.name}`}
              style={{ borderRadius: "50%" }}
            />
          )}
        </div>
        <div className="uk-width-expand">
          <p className="uk-margin-remove-bottom">By {article.author.name}</p>
          <p className="uk-text-meta uk-margin-remove-top">
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </p>
        </div> */}
      </article>
    </Layout>
  );
};

export default Article;
