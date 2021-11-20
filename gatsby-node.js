const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              id
              naglowek
              path
              tresc
              zdj_cia
              title
            }
          }
        }
      }
    }
  `)
  const templatePath = path.resolve(`{MarkdownRemark.frontmatter__id}.js`)
  
  result.allMarkdownRemark.edges.forEach((node) => {
    createPage({
      path: node.node.frontmatter.path,
      component: templatePath,
      context: {
        
      },
    })
  })
}