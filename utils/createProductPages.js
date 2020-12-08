const productTemplate = require.resolve("../src/templates/product.js")

module.exports = async ({ actions, graphql, basePath }) => {
  const result = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `)

  const products = result.data.allShopifyProduct.edges

  // Create single page for each product.
  products.forEach(({ node }) => {
    actions.createPage({
      path: basePath + node.handle,
      component: productTemplate,
      context: {
        handle: node.handle,
      },
    })
  })
}
