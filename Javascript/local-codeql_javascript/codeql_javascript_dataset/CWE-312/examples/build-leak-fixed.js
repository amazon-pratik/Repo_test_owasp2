//{fact rule=clear-text-credentials@v1.0 defects=0}

const webpack = require("webpack");

module.exports = [{
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({ DEBUG: process.env.DEBUG })
        })
    ]
}];

//{/fact}
