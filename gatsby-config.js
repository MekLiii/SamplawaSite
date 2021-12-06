module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gastby-plugin-sharp`
    // `gatsby-plugin-fontawesome-css`
  ],
};
