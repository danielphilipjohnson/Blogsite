import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark;
  console.log(post);
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

  console.log(pageContext);
  return (
    <Layout>
      <article className="container">
        <span className="bg-gradient-to-r from-blue-700 to-green-800 w-max font-medium text-white block uppercase py-1 px-2 text-4xl rounded">
          {post.frontmatter.category}
        </span>
        <header className="blog-post-header">
          <h1 className="text-6xl font-bold">{post.frontmatter.title}</h1>
          <p>Created by Daniel Philip Johnson</p>
          <div className="meta">
            <span className="date">
              Last updated on {post.frontmatter.date}
            </span>
            <p className="time">{cupsOfCoffee(post)} min read </p>
          </div>
        </header>

        <div className="blog-post-body">
          <figure className="blog-banner">
            <a href="https://github.com/danielphilipjohnson">
              <img
                className="shadow-lg object-cover rounded-lg"
                src={post.frontmatter.cover}
                alt="blog cover"
              />
            </a>
            <figcaption className="mt-2 text-center image-caption">
              Image Credit:
              <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
                {post.frontmatter.imageCredit}
              </a>
            </figcaption>
          </figure>
          <div
            className="container"
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
