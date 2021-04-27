import React from "react";

function Nav() {
  return (
    <header className="sticky top-0 z-40  w-full max-w-8xl mx-auto bg-white border-b border-gray-200 ">
      <div className="px-4 py-3 text-gray-700">
        <nav className="flex items-center justify-between">
          <span class="inline-flex w-14 h-14 font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full">
            DPJ
          </span>

          <span className="bg-transparent pr-7 py-1 text-gray-900 font-large font-bold">
            v0.0.1
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
