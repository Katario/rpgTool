module.exports = {
  devServer: {
    port: 8099
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/scss/variables.scss";
        `,
      },
    },
  },
};
