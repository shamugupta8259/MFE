const { merge } = require("webpack-merge");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

module.exports = merge(commonConfig, {
  mode: "production",
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./public/index.html",
    // }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
  },
});
