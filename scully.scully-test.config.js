exports.config = {
  projectRoot: "./src/app",
  projectName: "scully-test",
  outDir: './dist/static',
  routes: {
    '/dev/:myslugid': {
      type: 'contentFolder',
      myslugid: {
        folder: "./dev"
      }
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};