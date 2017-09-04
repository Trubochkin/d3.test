module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./js/d3-app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module:{
        loaders: [
            {test : /\.js/, loader: 'babel-loader', 'exclude': /node_modules/ },
            {test : /\.css$/, loader: 'style!css!'}
        ]
    },
    devServer: {
        inline:true,
        port: 3000
    },
}