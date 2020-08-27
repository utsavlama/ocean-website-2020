module.exports = {
  siteMetadata: {
    title: `Ocean dry cleaners`,
    description: `A dry cleaning service that provides a convinient solution for your dry cleaning needs.`,
    author: `@utsav`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ocean website 2020`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#318AF2`,
        theme_color: `#318AF2`,
        display: `minimal-ui`,
        icon: `src/images/Ocean-Logo-HR-copy.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
