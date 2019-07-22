let HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, '../static'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: "file-loader?name=/src/media/[name].[ext]"
            }
        ],

    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
};