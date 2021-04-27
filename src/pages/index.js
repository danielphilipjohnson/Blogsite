import React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/header";

export default function Home({ data }) {
  // get links of category
  const styleObj = {
    backgroundColor: "rgba(48,49,70,.64)",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${"https://www.danielphilipjohnson.com/static/showcase1-c58cf64918185dd34948a4d0d8860f05.jpg"})`,
    backgroundOrigin: "padding-box",
    backgroundClip: "border-box",
    backgroundBlendMode: "multiply",
  };
  const categoryNav = () => {
    return data.categories.distinct.map((category) => {
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
                <p className="bg-gradient-to-r from-blue-700 to-green-800 w-max font-medium text-white block uppercase py-1 px-2 text-xs rounded">
                  {category}
                </p>
                <h2 className="w-blog-title max-w-full pt-4 font-bold text-2xl md:text-3xl leading-snug text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h2>
              </header>
              <p className="mt-auto ml-auto uppercase font-medium text-sm text-white leading-tight">
                Read more
              </p>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <header className="sticky top-0 z-40  w-full max-w-8xl mx-auto bg-white border-b border-gray-200 lg:border-b-0">
        <div className="px-4 py-3 text-gray-700">
          <nav className="flex items-center justify-between">
            <span class="inline-flex w-14 h-14 font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full">
              DPJ
            </span>
            <ul className="flex justify-end">
              <li className="px-2">Portfolio</li>
              <li className="px-2">Blog</li>
            </ul>
          </nav>
        </div>
      </header>
      <header className="w-full pt-4 mb-4" style={styleObj}>
        <div className="grid grid-cols-1 md:grid-cols-4  items-center justify-items-center md:p-8 text-white">
          <img
            className="h-36 md:h-46 object-contain rounded-full mb-4 md:mr-7"
            src="https://www.danielphilipjohnson.com/static/profile-90ff2d9e23d36ceb0d775bc4d2fb48f5.jpg"
            alt=""
          />
          <div className="text-center mb-4">
            <p className="text-xl font-semibold mb-2">
              Daniel <span style={{ color: "#94c85a" }}>Philip</span> Johnson
            </p>
            <h2 className="text-2xl text-white-900 font-bold">
              &lt;FrontEndEnginer/&gt;
            </h2>
          </div>
          <div className="mb-2 md:col-span-2 md:flex flex-col items-end">
            <div className="mb-2">
              <button className="border border-white-800 px-2 py-1 mr-2">
                Get in Touch
              </button>
              <button className="border border-white-800 px-2 py-1">
                About Me
              </button>
            </div>

            <ul className="flex py-2">
              <li className="px-2">
                <img
                  className="h-8"
                  src="https://img.icons8.com/ios/250/ffffff/linkedin.png"
                  alt=""
                />
              </li>
              <li className="px-2">
                <img
                  className="h-8"
                  src="https://img.icons8.com/ios/250/ffffff/twitter.png"
                  alt=""
                />
              </li>
              <li className="px-2">
                <img
                  className="h-8"
                  src="https://img.icons8.com/ios/250/ffffff/youtube-play.png"
                  alt=""
                />
              </li>
              <li className="px-2">
                <img
                  className="h-8"
                  src="https://img.icons8.com/ios/250/ffffff/source-code.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>

        {/* <h4>{data.blogs.totalCount} Posts</h4> */}
      </header>

      <div className="container mx-auto px-4">
        <div className="text-center font-bold  text-2xl mb-2">Latest posts</div>
        <ul className="flex flex-wrap md:-mr-6 pb-4 md:pb-10">
          {categoryNav()}
        </ul>
      </div>

      {/* {data.blogs.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))} */}
    </div>
  );
}

export const query = graphql`
  query {
    blogs: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }

          excerpt
        }
      }
    }
    categories: allMarkdownRemark {
      distinct(field: frontmatter___category)
    }
  }
`;
