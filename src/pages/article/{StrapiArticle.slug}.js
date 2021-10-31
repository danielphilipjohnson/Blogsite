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
              gatsbyImageData(width: 48, height: 48)
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
      <article className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24 pb-16">
        <figure>
            <GatsbyImage
              className="w-full shadow-lg object-cover "
              alt={`Picture for ${article.title} article`}
              image={article.image.localFile.childImageSharp.gatsbyImageData}
              layout="fullWidth"
            />
        </figure>

        <header className="py-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-2 leading-tight md:leading-snug">
            {article.title}
          </h1>
        </header>
        <div className="flex mb-8 py-8 border-b border-t">
          <div className="mr-4">
            {article.author.picture && (
              <GatsbyImage
                image={
                  article.author.picture.localFile.childImageSharp
                    .gatsbyImageData
                }
                alt={`Picture of ${article.author.name}`}
                style={{ borderRadius: "50%" }}
              />
            )}
          </div>
          <div>
            <p className="font-bold text-gray-800">
              Created by {article.author.name}
            </p>
            <p className="date text-gray-500">
              Published on
              <span className="pl-1 font-bold">
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </span>
            </p>
          </div>
          {/* <p className="time mt-2">{cupsOfCoffee(post)} min read </p> */}
        </div>

        <div className="custom-blog md:px-16">
          <Markdown children={article.content} escapeHtml={false} />
        </div>
      </article>
    </Layout>
  );
};

export default Article;
