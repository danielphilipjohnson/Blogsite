import React from "react";
import { Link } from "gatsby";

function ArchiveBlogs({ blogs, title, count }) {
  return (
    <>
      <header>
        <h1 className="font-bold text-2xl capitalize mb-4">{title}</h1>
      </header>
      {blogs.map(({ node }) => {
        return (
          <article className="w-full text-xs" key={node.id}>
            <Link className="archive-link" to={node.fields.slug}>
              <div className="w-full flex justify-between leading-snug py-3 mb-2 hover:bg-gray-200">
                <span className="text-gray-500 whitespace-nowrap pr-2">
                  # {count--}
                </span>
                <h2 className="text-gray-900 truncate">
                  {node.frontmatter.title}
                </h2>
                <span className="text-gray-500 truncate">
                  {node.frontmatter.date}
                </span>
              </div>
            </Link>
          </article>
        );
      })}
    </>
  );
}

export default ArchiveBlogs;
