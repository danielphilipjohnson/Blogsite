import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import "@fontsource/open-sans"; // Defaults to weight 400 with all styles included.
import "./blog-styles.css";

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark;

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
      <article className="container">
        <span className="bg-gradient-to-r from-blue-700 to-green-800 w-max font-medium text-white block uppercase py-1 px-2 text-4xl rounded my-8">
          {post.frontmatter.category}
        </span>
        <header className="blog-post-header mb-4">
          <h1 className="text-6xl font-bold mb-2 leading-snug">
            {post.frontmatter.title}
          </h1>
          <p>Created by Daniel Philip Johnson</p>
          <div className="meta">
            <p className="date mt-2">Last updated on {post.frontmatter.date}</p>
            <p className="time mt-2">{cupsOfCoffee(post)} min read </p>
          </div>
        </header>

        <div className="blog-post-body">
          <figure className="blog-banner mb-4">
            <a href="https://github.com/danielphilipjohnson">
              <img
                className="w-full shadow-lg object-cover rounded-lg"
                src={post.frontmatter.cover}
                alt="blog cover"
              />
            </a>
            <figcaption className="mt-2  text-center image-caption">
              <p className="pt-3">
                Image Credit:
                <a
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
        </div>
        <nav className="blog-nav nav nav-justified my-5">
          {pageContext.previous && (
            <Link
              to={previousLink()}
              activeClassName="active"
              className="nav-link-prev nav-item nav-link rounded-left"
            >
              Previous
              <i className="arrow-prev fas fa-long-arrow-alt-left"></i>
            </Link>
          )}

          {pageContext.next && (
            <Link
              className="nav-link-next nav-item nav-link rounded-right"
              to={nextLink()}
            >
              Next<i className="arrow-next fas fa-long-arrow-alt-right"></i>
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
        id
        title
        cover
        imageCredit
        category
      }
    }
  }
`;
