const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const productionConfig = {
  mode: "production",
  devtool: "source-map",

  plugins: [new CleanWebpackPlugin()],
};

module.exports = merge(commonConfig, productionConfig);
