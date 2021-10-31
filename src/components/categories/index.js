import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";

const Categories = ({ location }) => {
  const data = useStaticQuery(query);

  return (
    <div className="mx-auto px-8 py-16 max-w-7xl">
      <div className="text-center font-bold  text-2xl">
        <header className="py-6 md:py-10 flex flex-wrap items-center justify-between md:pt-0 md:pr-6">
          <h1 className="text-5xl capitalize">
            <Link to="/categories">Popular Categories</Link>
          </h1>
        </header>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:pb-10">
        {data.allStrapiCategory.edges.map((category, i) => {
          return (
            <div
              className="w-full mb-6 md:mb-10 md:pr-6"
              key={category.node.name}
            >
              <div className="group relative" >
                <figure className="overflow-hidden rounded-lg">
                  <GatsbyImage
                    className="transform transition duration-300 ease-in-out group-hover:scale-110 filter-mask w-full h-blog-img shadow-lg object-cover rounded-lg"
                    image={
                      category.node.cover.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    height={450}
                    width={800}
                    formats={["auto", "avif", "webp", "png"]}
                    style={{ minHeight: "300px" }}
                    alt={category.node.cover.alternativeText}
                  />
                </figure>
                <Link
                  to={`/categories/${category.node.slug}`}
                  className="blog-link absolute 2 inset-0 p-6 flex flex-col items-start cursor-pointer transition-cursor duration-300 ease-in-out text-white"
                >
                  <header className="w-full">
                    <p className="bg-gradient-to-r from-blue-700 to-green-800 w-max font-medium text-white block uppercase py-1 px-2 text-xs rounded">
                      {category.node.name}
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

const query = graphql`
  query {
    allStrapiCategory {
      edges {
        node {
          slug
          name
          cover {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            alternativeText
          }
        }
      }
    }
  }
`;

export default Categories;
