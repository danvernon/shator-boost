const createPrductPages = require("./utils/createProductPages")

let basePath
exports.onPreBootstrap = ({ store }, themeOptions) => {
  basePath = themeOptions.basePath || `/`
}

exports.createPages = async ({ actions, graphql }) => {
  await createPrductPages({ actions, graphql, basePath })
}
