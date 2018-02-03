const path = require('path');

module.exports = {
  entry: {
    'ngx-freshresume': './src/index.js',
    'freshresume-basis': './src/basis/basis.module',
    'freshresume-compact': './src/compact/compact.module',
    'freshresume-modern': './src/modern/modern.module',
    'freshresume-positive': './src/positive/positive.module'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ 'es2015', 'angular2' ]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|woff(2)?|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  externals: {
    "@angular/common": "@angular/common",
    "@angular/core": '@angular/core',
    "@angular/http": '@angular/http',
    "rxjs/Observable": 'rxjs/Observable'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
    libraryTarget: 'umd'
  }
};
