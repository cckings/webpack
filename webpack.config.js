const path = require('path');

module.exports = {
  entry:{
    entry:'./src/entery.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'common.js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  plugins:[],
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    compress:true,
    host:'localhost',
    port:1717
  }
}