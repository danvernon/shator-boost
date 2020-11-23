const productTemplate = require.resolve("../src/templates/product.js")
const cartTemplate = require.resolve("../src/templates/cart.js")
const chunk = require("lodash/chunk")

module.exports = async ({ actions, graphql, basePath }) => {
  const result = await graphql(`
    query {
      allWpProduct {
        nodes {
          id
          slug
        }
      }
    }
  `)

  const products = result.data.allWpProduct.nodes

  // Create single page for each product.
  products.forEach(product => {
    actions.createPage({
      path: basePath + product.slug,
      component: productTemplate,
      context: {
        id: product.id,
      },
    })
  })

  // // Create paginated list of products.
  // const perPage = 6
  // const listPages = chunk(products, perPage)
  // const totalArchivePages = listPages.length

  // listPages.forEach((archiveProduts, index) => {
  //   const page = index + 1
  //   actions.createPage({
  //     path: page === 1 ? basePath : basePath + page,
  //     component: archiveTemplate,
  //     context: {
  //       products: archiveProduts,
  //       pageInfo: {
  //         basePath: basePath,
  //         previousPage: page - 1,
  //         nextPage: page == totalArchivePages ? 0 : page + 1,
  //       },
  //     },
  //   })
  // })

  // Create cart page.
  actions.createPage({
    path: basePath + "cart",
    component: cartTemplate,
  })
}
