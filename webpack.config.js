const HtmlWebpackPlugin = require('html-webpack-plugin')
const path  =require('path')
module.exports = {
  mode:"development",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts?x$/,
        exclude: /node_modules/,
        use: ["babel-loader"]          
      },
    ],
    
  },
  resolve:{
    extensions:[".ts", ".tsx",".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
