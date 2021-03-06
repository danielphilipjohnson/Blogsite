import React from "react";
import { Link } from "gatsby";

function ArchiveBlogs({ blogs, title, count }) {
  return (
    <>
      <header>
        <h1 className="font-bold text-2xl capitalize mb-4">{title}</h1>
      </header>
      {blogs.map((article) => {
        return (
          <article className="w-full text-xs" key={article.id}>
            <Link className="archive-link" to={"/article/" + article.slug}>
              <div className="w-full flex justify-between leading-snug py-3 mb-2 hover:bg-gray-200">
                <span className="text-gray-500 whitespace-nowrap pr-2">
                  # {count--}
                </span>
                <h2 className="text-gray-900 truncate">
                  {article.title}
                </h2>
                <span className="text-gray-500 truncate">
                  {new Date(article.published_at).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
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
