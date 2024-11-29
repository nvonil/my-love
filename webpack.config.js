const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    // BUNDLES JAVASCRIPT, $ npx webpack OR $ npm run build
    mode: "development",
    entry: "./src/script.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    // HOSTS WEBPACK DEV SERVER, $ npx webpack serve OR $ npm run dev, http://localhost:8080
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/index.html"],
    },

    // HANDLES HTML
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],

    // LOADS CSS
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            // LOADS IMAGES REFERENCED IN HTML
            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            // LOADS IMAGES IMPORTED IN JAVASCRIPT
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};