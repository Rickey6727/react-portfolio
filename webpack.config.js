const path = require('path');
 
module.exports = {
    mode: 'development',
 
    entry: {
        "app": "./app/index.jsx",
    },
 
    output: {
        path: path.join(__dirname, './dist/'),
        filename: '[name].js'
    },
 
    module: {
        rules: [
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};
