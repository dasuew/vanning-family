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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data/images`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
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
