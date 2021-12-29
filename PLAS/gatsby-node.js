exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-ngl/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.onCreatePage = async({page,actions})=>{
  const {createPage} = actions;
  if(page.path.match(/^\/app/)){
    page.matchPath="/app/*"
    createPage(page)
  }
//   if(page.path.match(/^\/profile/)){
//     page.matchPath="/profile/*"
//     createPage(page)
//   }
}