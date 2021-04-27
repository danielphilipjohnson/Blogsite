import React from "react";
import { Link, graphql } from "gatsby";
// import Header from "../components/header";
import Nav from "../layout/nav";
import Banner from "../layout/banner";
import Footer from "../layout/footer";

export default function Home({ data }) {
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
      <Nav />
      <Banner />

      <div className="container">
        <div className="text-center font-bold  text-2xl mb-2">
          <header className="py-6 md:py-10 flex flex-wrap items-center justify-between md:pt-0 md:pr-6">
            <h2 className="text-5xl">Latest posts</h2>
          </header>
        </div>
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
      <Footer />
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
<h3 className="uppercase font-bold border-b-2 mb-4">Internal links</h3>;
