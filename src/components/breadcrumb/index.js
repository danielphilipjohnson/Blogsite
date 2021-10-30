import React from "react";
import { Link } from "gatsby";
function BreadCrumb({ location }) {
  const locationArray = location.pathname.split("/");
  const totalLocations = locationArray.length;

  const LiLocation = locationArray.map((li, i) => {
    if (i === totalLocations - 1 && li !== "") {
      return (
        <li class="inline-flex items-center" key={li}>
          <p to={"/" + li} className="text-teal-400 capitalize">
            {li}
          </p>
        </li>
      );
    } else if (li !== "") {
      return (
        <li class="inline-flex items-center" key={li}>
          <Link to={"/" + li} className="text-teal-400 capitalize">
            {li}
            <span class="ml-4 mr-5">/</span>
          </Link>
        </li>
      );
    }
  });

  return (
    <div className="container relative z-10">
      <ul className="flex text-gray-500 text-sm lg:text-base py-8">
        <li className="inline-flex items-center">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          </a>
          <span className="ml-4 mr-5">/</span>
        </li>
        {LiLocation}
      </ul>
    </div>
  );
}

export default BreadCrumb;
