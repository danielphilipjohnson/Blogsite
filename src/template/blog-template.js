import React from "react";
import { graphql, Link } from "gatsby";

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark;
  const cupsOfCoffee = (post) => {
    let amountOfCoffees = "";
    for (let i = 0; i < post.timeToRead; i++) {
      amountOfCoffees += "☕ ";
    }
    return amountOfCoffees;
  };
  console.log(post);
  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <h2 className="title">{post.title}</h2>
        <div className="meta">
          <span className="date">{post.frontmatter.date}</span>
          <span className="time">{cupsOfCoffee(post)} min read </span>
        </div>
      </header>

      <div className="blog-post-body">
        <figure className="blog-banner">
          <a href="https://github.com/danielphilipjohnson">
            <img
              className="img-fluid"
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
    </article>
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
      }
    }
  }
`;
