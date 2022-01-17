module.exports = {
  // pathPrefix:`/plas-5k`,
  siteMetadata: {
    title: `PLAS`,
    description: `PLAS-5k`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    menuLinks:[
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Others',
        link: '#',
        items: [
          // {
          //   name: 'PDB Viewer',
          //   // link: '/app/viewer',
          //   link: '/viewer'
          // },
          {
            name: 'Contributors',
            link: '/contributors',
          },
          {
            name: 'Query',
            link: '/query'
          },
          {
            name: 'Legals',
            link: '#',
            items: [
              {
                name: 'Terms and Conditions',
                link: '/tc',
              },
              {
                name: 'License Agreement',
                link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode',
              },
              // {
              //   name: 'Option 3',
              //   link: '#',
              // },
              // {
              //   name: 'Option 4',
              //   link: '#',
              // },
            ],
          },
        ],
      },
      {
        name:'Database',
        link:'/database',
      },
      {
        name: 'Viewer',
        link: '/viewer',
        cl: 'button primary',
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options:{
        fonts:[
          `Material Icons`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options:{
        fonts:[
          `Roboto`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
