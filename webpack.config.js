const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: {
        index: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
        module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            },
        ],
    },
        plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/projects.html',
            inject: true,
            chunks: ['index'],
            filename: 'projects.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/tasks.html',
            inject: true,
            chunks: ['index'],
            filename: 'tasks.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            inject: true,
            chunks: ['index'],
            filename: 'about.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true,
    },
    mode: 'development',
};