module.exports = {
  // pathPrefix:`/dataset/d4/plas5k`,
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
          {
            name: 'PDB Viewer',
            link: '/viewer',
          },
          {
            name: 'Contributors',
            link: '/contributors',
          },
          {
            name: 'Terms and Condition',
            link: '/tc',
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
                link: '/license',
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
        name:'Query',
        link:'/query',
      },
      {
        name: 'Profile',
        link: '/profile',
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
    // `gatsby-plugin-offline`,
  ],
}
