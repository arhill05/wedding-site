module.exports = {
  siteMetadata: {
    title: 'Julie and Drew',
    description: 'Julie and Drew are getting married! Visit the site for registry information, photos, RSVP forms, and more.',
    author: 'Drew Hill',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#f7e8ff',
        theme_color: '#600093',
        display: 'minimal-ui'
        // icon: '', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
