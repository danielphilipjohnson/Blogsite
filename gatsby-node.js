const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// 1. create all page slugs with category path linked
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `./`,
    });

    const removeFilename = slug.replace("/blog/", "/").split("/")[1];
    var cleanedSlug = "/" + removeFilename + "/";

    createNodeField({
      node,
      name: `slug`,
      value: `${cleanedSlug}`,
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
  const result = await graphql(
    `
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

  // 2b fetch categories
  const categories = await getAllBlogCategories(graphql);
  // 2c iterate categories
  categories.map((category) => {
    const blogPosts = result.data.allMarkdownRemark.edges;

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
};
