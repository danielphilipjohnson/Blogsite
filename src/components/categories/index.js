import React from "react";
import { Link } from "gatsby";

function Categories({ categories }) {
  <div>
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
  </div>;
}

export default Categories;
