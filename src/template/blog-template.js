import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./blog-styles.css";

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark;

  const image = getImage(post.frontmatter.cover);

  const { previous, next } = pageContext;

  const cupsOfCoffee = (post) => {
    let amountOfCoffees = "";
    for (let i = 0; i < post.timeToRead; i++) {
      amountOfCoffees += "☕ ";
    }
    return amountOfCoffees;
  };

  const previousLink = () => {
    if (previous) {
      return previous.fields.slug;
    }
  };

  const nextLink = () => {
    if (next) {
      return next.fields.slug;
    }
  };

  return (
    <Layout>
      <Seo
        pageData={pageContext}
        metaImage={
          post.frontmatter.cover.childImageSharp.gatsbyImageData.images.fallback
            .src
        }
        isBlogPost={true}
        frontmatter={post.frontmatter}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        datePublished={post.frontmatter.datePublished}
      />
      <article className="container py-4">
        <span
          className="bg-gradient-to-r from-blue-700 to-green-800 
        w-max font-medium text-white block uppercase 
        py-4 px-2 md:text-4xl rounded mb-4"
        >
          {post.frontmatter.category}
        </span>
        <header className="mb-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight md:leading-snug">
            {post.frontmatter.title}
          </h1>
          <p>Created by Daniel Philip Johnson</p>
          <div className="meta">
            <p className="date mt-2">Last updated on {post.frontmatter.date}</p>
            <p className="time mt-2">{cupsOfCoffee(post)} min read </p>
          </div>
        </header>
        <figure className="mb-4">
          <a href="https://github.com/danielphilipjohnson">
            <GatsbyImage
              class="w-full shadow-lg object-cover rounded-lg"
              image={image}
              alt="blog cover"
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
                {post.frontmatter.imageCredit}
              </a>
            </p>
          </figcaption>
        </figure>
        <div
          className="custom-blog"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
        <nav className="my-8">
          {pageContext.previous && (
            <Link
              to={previousLink()}
              activeClassName="active"
              className="border border-white-800 px-3 py-2 mr-2"
            >
              Previous
            </Link>
          )}

          {pageContext.next && (
            <Link
              className="border border-white-800 px-3 py-2 mr-2"
              to={nextLink()}
            >
              Next
            </Link>
          )}
        </nav>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      id
      timeToRead
      html
      frontmatter {
        date
        datePublished
        id
        title
        imageCredit
        category
        description
        keywords
        cover {
          childImageSharp {
            gatsbyImageData(
              width: 1200
              quality: 90
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF, PNG]
            )
          }
        }
      }
    }
  }
`;
