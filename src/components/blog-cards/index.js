import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

function BlogCards({ blogs, title }) {
  return (
    <>
      <div className="text-center font-bold text-2xl mb-2">
        <header className="py-6 md:py-10 flex flex-wrap items-center justify-between md:pt-0 md:pr-6">
          <h1 className="text-4xl md:text-5xl capitalize">{title}</h1>
        </header>
      </div>
      <div className="flex flex-wrap md:-mr-6 pb-4 md:pb-10">
        {blogs.map((article, i) => {
          return (
            <div
              className="w-full md:w-1/2 md:pr-6 mb-4 md:mb-4"
              key={article.node.slug}
            >
              <div className="group relative">
                <figure
                  className="overflow-hidden rounded-lg"
                  style={{
                    filter: "brightness(.3)",
                  }}
                >
                  <GatsbyImage
                    className="transform transition duration-300 ease-in-out group-hover:scale-110 filter-mask w-full shadow-lg object-cover rounded-lg"
                    image={
                      article.node.image.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    height={450}
                    width={800}
                    formats={["auto", "avif", "webp", "png"]}
                    style={{ minHeight: "300px" }}
                    alt={article.node.image.alternativeText}
                  />
                </figure>
                <Link
                  to={`/article/${article.node.slug}`}
                  className="blog-link absolute inset-0 p-6 flex flex-col items-start cursor-pointer transition-cursor duration-300 ease-in-out text-white"
                >
                  <header className="w-full">
                    <p className="bg-gradient-to-r from-blue-700 to-green-800 w-max font-medium text-white block uppercase py-1 px-2 text-xs rounded">
                      {article.node.category.name}
                    </p>
                    <h2 className="w-blog-title max-w-full pt-4 font-bold text-2xl md:text-3xl leading-snug text-white">
                      {article.node.title}
                    </h2>
                  </header>
                  <p className="mt-auto ml-auto uppercase font-medium text-sm text-white leading-tight bg-black p-2">
                    Read more
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BlogCards;
