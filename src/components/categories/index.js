import React from "react";
import { Link } from "gatsby";

function Categories({ categories }) {
  return (
    <div className="container">
      <div className="text-center font-bold  text-2xl mb-2">
        <header className="py-6 md:py-10 flex flex-wrap items-center justify-between md:pt-0 md:pr-6">
          <h2 className="text-5xl capitalize">Topics</h2>
        </header>
      </div>
      <ul className="flex flex-wrap md:-mr-6 pb-4 md:pb-10">
        {categories.map((category) => {
          return (
            <div className="w-full md:w-1/2  mb-6 md:mb-10 md:pr-6">
              <div className="group relative">
                <figure className=" rounded-lg">
                  <img
                    class="transform transition duration-300 ease-in-out group-hover:scale-110 filter-mask w-full h-blog-img shadow-lg object-cover rounded-lg"
                    src="https://source.unsplash.com/1600x900/?nature"
                    lazy="loaded"
                    style={{ height: "350px", width: "800px" }}
                  />
                </figure>
                <Link
                  to={`/${category}/`}
                  className="absolute inset-0 p-6 flex flex-col items-start cursor-pointer hover:cursor-planet focus:cursor-planet transition-cursor duration-300 ease-in-out text-white"
                >
                  <header className="w-full">
                    <p className="bg-gradient-to-r from-blue-700 to-green-800 w-max font-medium text-white block uppercase py-1 px-2 text-4xl rounded">
                      {category}
                    </p>
                  </header>
                  <p className="bg-gradient-to-r from-blue-700 to-blue-800 px-1 py-2 mt-auto ml-auto uppercase font-medium text-sm text-white leading-tight">
                    Read more
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;