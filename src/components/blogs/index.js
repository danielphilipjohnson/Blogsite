import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
function Blogs({ blogs, title }) {
  return (
    <>
      <div className="text-center font-bold  text-2xl mb-2">
        <header className="py-6 md:py-10 flex flex-wrap items-center justify-between md:pt-0 md:pr-6">
          <h2 className="text-5xl capitalize">{title}</h2>
        </header>
      </div>
      <div className="flex flex-wrap md:-mr-6 pb-4 md:pb-10">
        {blogs.map(({ node }) => {
          const image = getImage(node.frontmatter.cover);
          return (
            <div className="w-full md:w-1/2   md:pr-6" key={node.id}>
              <div className="group relative">
                <figure
                  className=" rounded-lg"
                  style={{
                    filter: "brightness(.3)",
                  }}
                >
                  <GatsbyImage
                    class="transform transition duration-300 ease-in-out group-hover:scale-110 filter-mask w-full h-blog-img shadow-lg object-cover rounded-lg"
                    image={image}
                    height={350}
                    width={800}
                    alt={"blog " + node.frontmatter.title}
                  />
                </figure>
                <Link
                  to={node.fields.slug}
                  className="absolute inset-0 p-6 flex flex-col items-start cursor-pointer hover:cursor-planet focus:cursor-planet transition-cursor duration-300 ease-in-out text-white"
                >
                  <header className="w-full">
                    <p className="bg-gradient-to-r from-blue-700 to-green-800 w-max font-medium text-white block uppercase py-1 px-2 text-xs rounded">
                      {node.frontmatter.category}{" "}
                      {/* <span>— {node.frontmatter.date}</span> */}
                    </p>
                    <h2 className="w-blog-title max-w-full pt-4 font-bold text-2xl md:text-3xl leading-snug text-white">
                      {node.frontmatter.title}
                    </h2>
                  </header>
                  <p className="mt-auto ml-auto uppercase font-medium text-sm text-white leading-tight">
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
