module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: process.env.WPGRAPHQL_URL || `https://shator-boost.com/graphql`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter WordPress Blog`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
