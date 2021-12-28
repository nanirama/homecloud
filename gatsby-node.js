const path = require("path")
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const { data } = await graphql(`
//   query {    
//       Pages : allPrismicPage {
//         edges {
//           node {
//             id
//             uid
//           }
//         }
//       }
//   }
// `)

// data.Pages.edges.forEach(({ node }) => { 
//   console.log('Page id', node.uid)     
//   createPage({
//     path: `${node.uid}/`,
//     component: path.resolve("./src/templates/page-template.js"),
//     context: {
//       id:node.uid
//     },
//   })
// })
// }