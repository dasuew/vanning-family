module.exports = {
  siteMetadata: {
    title: `Vanning family`,
    description: `A blog about travel 9 weeks through to sweden and norway with family in a Nugget.`,
    author: `@dasuew`,
  },
  pathPrefix: "/vanning-family",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            },
          }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vanning-family`,
        short_name: `vanningfamily`,
        start_url: `/`,
        background_color: `#5F3384`,
        theme_color: `#5F3384`,
        display: `minimal-ui`,
        icon: `favicon.png`,
      },
    },
    `gatsby-plugin-postcss`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
