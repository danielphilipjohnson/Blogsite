import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Categories = ({ location, name, articles }) => {
  return (
    <div className="container">
      <div className="text-center font-bold  text-2xl">
        <header className="py-6 md:py-10 flex flex-wrap items-center justify-between md:pt-0 md:pr-6">
          <h1 className="text-5xl capitalize">{name}</h1>
        </header>
      </div>

      <div className="flex flex-wrap md:-mr-6 pb-4 md:pb-10">
        {articles.map((article, i) => {
          const image = getImage(article.image.localFile);
          return (
            <div
              className="w-full md:w-1/2 mb-6 md:mb-10 md:pr-6"
              key={article.name}
            >
              <div className="group relative">
                <figure className="overflow-hidden rounded-lg">
                  <GatsbyImage
                    className="transform transition duration-300 ease-in-out group-hover:scale-110 filter-mask w-full h-blog-img shadow-lg object-cover rounded-lg"
                    image={image}
                    height={450}
                    width={800}
                    formats={["auto", "avif", "webp", "png"]}
                    style={{ minHeight: "300px" }}
                    alt={article.alternativeText}
                  />
                </figure>
                <Link
                  to={`/article/${article.slug}`}
                  className="blog-link absolute 2 inset-0 p-6 flex flex-col items-start cursor-pointer transition-cursor duration-300 ease-in-out text-white"
                >
                  <header className="w-full">
                    <p className="bg-gradient-to-r from-blue-700 to-green-800 w-max font-medium text-white block uppercase py-1 px-2 text-xs rounded">
                      {article.title}
                    </p>
                  </header>
                  <p className="mt-auto ml-auto uppercase font-medium text-sm rounded text-white leading-tight px-2 p-1 bg-gradient-to-r from-blue-700 to-blue-800 ">
                    Read more
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
