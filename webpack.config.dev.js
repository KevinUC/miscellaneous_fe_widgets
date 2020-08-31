const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const path = require("path");

const developmentConfig = {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    //hot: true,
    // overlay: true
  },
};

module.exports = merge(commonConfig, developmentConfig);
