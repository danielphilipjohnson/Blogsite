import React from "react";
import { graphql, Link } from "gatsby";

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark;

  return (
    <article className="blog-post px-3 py-5 p-md-5">
      <div
        className="container"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
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
      }
    }
  }
`;
