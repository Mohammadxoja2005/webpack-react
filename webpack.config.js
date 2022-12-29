const path = require("path");
const hwplugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    }, 

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js"
    },

    devServer: {
        port: 8000,
        open: true, 
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.(jpg|png|webp)$/i,
                type: "asset/resource",
            }
        ]
    }, 
}

