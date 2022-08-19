
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.jsx?$/,
            }
        ]
    }
}
