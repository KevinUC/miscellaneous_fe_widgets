const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    watchContentBase: true,
    //hot: true,
    // overlay: true
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader", options: { injectType: "linkTag" } },
          //"style-loader",
          { loader: "file-loader" },
          //"css-loader",
        ],
      },

      // {
      //   //IMAGE LOADER
      //   test: /\.png$/,
      //   loader: "file-loader",
      // },

      {
        test: /\.png$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
