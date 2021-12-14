module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Aktualnosci`,
        path: `${__dirname}/content/blog/`,
      },
      
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Produkty`,
        path: `${__dirname}/content/blog/Produkty/`,
        
      },
    },
    

    `gatsby-transformer-remark`,
    "gatsby-plugin-netlify-cms",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: 'jpg', // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:'mecz',
        path: `${__dirname}/content/`
      },
    },
    // `gatsby-plugin-fontawesome-css`
  ],
};
