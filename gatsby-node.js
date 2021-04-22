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

    createNodeField({
      node,
      name: `slug`,
      value: `/${node.frontmatter.category}${slug}`,
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
  // 2.a get all blogs from the chosen category
  await getAllBlogCategories(graphql).then((categories) => {
    console.log("categories", categories);
    // 2.b iterate category and create pages for that blog
    categories.map(async (category) => {
      console.log("category", category);
      // 2.b get all blogs from the chosen category
    });
  });
};
