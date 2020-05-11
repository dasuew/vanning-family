const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql }) => {

    const results = await graphql(`
     {
        allPostsJson {
          edges {
            node {
              id
            }
          }
        }
      }
    `)

    results.data.allPostsJson.edges.forEach(edge => {
        const post = edge.node        
        const template = path.resolve('./src/templates/postTemplate.js')

        createPage({
            path: `/posts/${post.id}`,
            component: template,
            context: {
                id: post.id
            }
        })
    })
}
