import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
function Blogs({ blogs, title }) {
  return (
    <>
      <div className="text-center font-bold  text-2xl mb-2">
        <header className="py-6 md:py-10 flex flex-wrap items-center justify-between md:pt-0 md:pr-6">
          <h1 className="text-4xl md:text-5xl capitalize">{title}</h1>
        </header>
      </div>
      <div className="flex flex-wrap md:-mr-6 pb-4 md:pb-10">
        {blogs.map((article) => {
          const image = getImage(article.image.localFile);
          return (
            <div
              className="w-full md:w-1/2 mb-6 md:mb-10 md:pr-6"
              key={article.id}
            >
              <div className="group relative border rounded-full">
                <figure
                  className="overflow-hidden rounded-lg"
                  style={{
                    filter: "brightness(.3)",
                  }}
                >
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
                  to={"/article/" + article.slug}
                  className="blog-link absolute inset-0 p-6 flex flex-col items-start cursor-pointer transition-cursor duration-300 ease-in-out text-white"
                >
                  <p className="bg-gradient-to-r from-blue-700 to-green-800 w-max font-medium text-white block uppercase py-1 px-2 text-xs rounded">
                    {article.category.name}{" "}
                  </p>
                  <header className="w-full mb-4 pt-4">
                    <h2 className="max-w-full font-bold text-lg md:text-xl leading-snug text-white">
                      {article.title}
                    </h2>
                  </header>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui.
                  </p>
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

export default Blogs;
