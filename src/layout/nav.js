import React from "react";

function Nav() {
  return (
    <header className="sticky top-0 z-40  w-full max-w-8xl mx-auto bg-white border-b border-gray-200 ">
      <div className="px-4 py-3 text-gray-700">
        <nav className="flex items-center justify-between">
          <span class="inline-flex w-14 h-14 font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full">
            DPJ
          </span>
          {/* <ul className="flex justify-end">
            <li className="px-2">Portfolio</li>
            <li className="px-2">Blog</li>
          </ul> */}
          <ul className="flex justify-end">
            <li className="pr-2">
              <img
                className="h-8"
                src="https://img.icons8.com/ios/250/000000/linkedin.png"
                alt=""
              />
            </li>
            <li className="pr-2">
              <img
                className="h-8"
                src="https://img.icons8.com/ios/250/000000/twitter.png"
                alt=""
              />
            </li>
            <li className="pr-2">
              <img
                className="h-8"
                src="https://img.icons8.com/ios/250/000000/youtube-play.png"
                alt=""
              />
            </li>
            <li className="pr-2">
              <img
                className="h-8"
                src="https://img.icons8.com/ios/250/000000/source-code.png"
                alt=""
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
