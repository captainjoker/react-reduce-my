const autoprefixer = require('autoprefixer');
const path = require('path');
const outPath = path.resolve(__dirname, 'build');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['./src/index.js'],
    output:{
        path:outPath,
        publicPath:'/assets/',
        filename:'bundle.js'
    },
    devServer:{
        contentBase:'./public',
        historyApiFallback:true,
        port:3333,
        open:true,
        inline:true
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.scss$/,
                loader: 'style-loader!css-loader?modules!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'//添加对样式表的处理
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    },
    plugins:[],
    resolve: {
        extensions: [' ', '.js', '.jsx']
    }
};