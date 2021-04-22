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
  await getAllBlogCategories(graphql).then((category) => {
    // 2.b iterate category and create pages for that blog
    console.log(category);
  });
};
