let helpers = require('./helpers');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: helpers.root('dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './dist'
    }
};