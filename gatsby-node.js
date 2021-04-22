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
