var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/js/app.js',
    },
    output: {
        path: './public/js/',
        filename: "[name].bundle.min.js",
        chunkFilename: "[id].chunk.min.js"
    },
    externals: {
      'electron': 'require("electron")',
      'fs': 'require("fs")',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
          filename: "commons.min.js",
          name: "commons"
      })
    ]
};
