module.exports = {
  siteMetadata: {
    title: "edusite",
    siteUrl: "https://subhajit-roy.github.io",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/blog/",
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mdx",
        path: "./src/Course/mdx",
      },
      __key: "mdx",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mdx",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-transformer-remark`,
  ],
}
