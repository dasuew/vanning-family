const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  return await graphql(`
     {
        allMarkdownRemark {
          edges {
            node {
              html
              id
              frontmatter {
                title
                slug
                date
                published
                highlight
                lowlight
                advice
                tfi
              }
            }
          }
        }
      }
    `)
    .then(results => {
      if (results.errors) {
        return Promise.reject(results.errors)
      }

      results.data.allMarkdownRemark.edges.forEach(edge => {
        const post = edge.node
        const template = path.resolve('src/templates/postTemplate.js')

        createPage({
          path: `${post.frontmatter.slug}`,
          component: template,
          context: {
              slug: post.frontmatter.slug
          }
        })
      })

    })


}
