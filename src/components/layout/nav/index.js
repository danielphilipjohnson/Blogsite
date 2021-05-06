import React from "react";
import { Link } from "gatsby";
function Nav() {
  return (
    <nav
      className="sticky top-0 z-40 w-full max-w-8xl mx-auto bg-white border-b border-gray-200 px-4 py-3 text-gray-700 flex items-center justify-between"
      role="navigation"
      aria-labelledby="nav1"
    >
      <ul>
        <li>
          <Link
            to="/"
            id="nav1"
            className="inline-flex w-14 h-14 font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full"
          >
            DPJ
          </Link>
        </li>
      </ul>

      <span className="bg-transparent pr-7 py-1 text-gray-900 font-large font-bold">
        v0.0.1
      </span>
    </nav>
  );
}

export default Nav;
