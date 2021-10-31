import React from "react";
import { Link } from "gatsby";

export default function pagination({ url, pageContext }) {
  const isPreviousBlogs = () => {
    if (pageContext.currentPage > 1) {
      return true;
    }
  };

  const PreviousBlogLink = () => {
    if (pageContext.currentPage <= 2) {
      return `/${url}/`;
    } else {
      return `/${url}/${pageContext.currentPage - 1}`;
    }
  };

  const isMoreBlogs = () => {
    if (pageContext.currentPage < pageContext.numPages) {
      return true;
    }
  };

  const NextBlogLink = () => {
    return `/${url}/${pageContext.currentPage + 1}`;
  };
  return (
    <nav
      className="w-full flex justify-center pb-5"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <ul className="flex justify-center">
        {isPreviousBlogs() && (
          <li className="border border-black px-4 py-2 mr-2">
            <Link to={PreviousBlogLink()}>Previous</Link>
          </li>
        )}
        {isMoreBlogs() && (
          <li className="border border-black px-4 py-2 mr-2">
            <Link to={NextBlogLink()}>Next</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
