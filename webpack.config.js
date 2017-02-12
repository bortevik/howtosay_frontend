var path = require("path");

module.exports = {
  entry: {
    app: [
      './app/styles/main.scss',
      './app/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test:    /\.html$/,
        exclude: /node_modules/,
        use:  'file-loader?name=[name].[ext]'
      },
      {
        test:    /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use:  'elm-webpack-loader?verbose=true&warn=true'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      },
    ],

    noParse: /\.elm$/
  }
};
