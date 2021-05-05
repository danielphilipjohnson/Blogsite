const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

function createAllBlogsPages(data, actions) {
  const { blogs } = data;
  const { edges } = blogs;
  console.log(edges);

  if (!edges.length) {
    throw new Error("There are no blogs!");
  }

  const { createPage } = actions;

  const postsPerPage = 4;

  const numPages = Math.ceil(edges.length / postsPerPage);

  createBlogs(createPage, numPages, postsPerPage);

  return null;
}

const createBlogs = (createPage, numPages, postsPerPage, i) => {
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs/` : `/blogs/${i + 1}`,

      component: path.resolve(`./src/template/blogs.js`),

      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

// 1. create all page slugs with category path linked
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `./`,
    });

    createNodeField({
      node,
      name: `slug`,
      value: `${slug}`,
    });
  }
};

const getAllBlogCategories = async (graphql) => {
  const categories = await graphql(`
    query {
      allMarkdownRemark {
        distinct(field: frontmatter___category)
      }
    }
  `);
  return categories.data.allMarkdownRemark.distinct;
};

// 2. create pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  //2.a get all blogs
  const { data, errors } = await graphql(
    `
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
                category
                date
                title
              }
            }
          }
        }
      }
    `
  );

  const { blogs } = data;
  // 2b fetch categories
  const categories = await getAllBlogCategories(graphql);
  // 2c iterate categories
  categories.map((category) => {
    const blogPosts = blogs.edges;

    // 3.a filter blogs via category
    const categoryBlogs = blogPosts.filter(
      (post) => post.node.frontmatter.category === category
    );

    const postsPerPage = 2;
    const numPages = Math.ceil(categoryBlogs.length / postsPerPage);

    // 3.b create pages with pagniation for the category
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/${category}/` : `/${category}/${i + 1}`,

        component: path.resolve(`./src/template/blog-category.js`),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          category: category,
        },
      });
    });

    // 3.c create pages for each individual page
    categoryBlogs.forEach((post, index) => {
      const previous =
        index === categoryBlogs.length - 1
          ? null
          : categoryBlogs[index + 1].node;

      const next = index === 0 ? null : categoryBlogs[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: path.resolve(`./src/template/blog-template.js`),
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  });

  //4 generate all blogs
  createAllBlogsPages(data, actions);
};
