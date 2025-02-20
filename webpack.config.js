const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: { port: 3002 },
    output: { publicPath: "auto" },
    plugins: [
        new ModuleFederationPlugin({
            name: "mfe2",
            filename: "remoteEntry.js",
            exposes: { "./App": "./src/App" },
        }),
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
    ],
};
