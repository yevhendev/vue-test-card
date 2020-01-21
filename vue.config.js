module.exports = {
  devServer: {
    progress: true,
    open: false,
    hot: false
    // proxy: 'http://localhost:3000',
  },
  transpileDependencies: ["vuex-module-decorators", "vuetify"]
};
