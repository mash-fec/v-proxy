module.exports = {
  mode: 'development',
  entry: {
    vendor: ['styled-components'],
    nav: '../fec-services/m-nav/client/nav.jsx',
    images: '../fec-services/j-service/client/src/app.jsx',
    descriptions: '../fec-services/m-service/client/index.jsx',
    reviews: '../fec-services/v-service/client/app.jsx',
    morehomes: '../fec-services/a-service/client/MoreHomes.jsx',
    booking: '../fec-services/m-booking/client/booking.jsx'
  },
  externals: {
    'styled-components': 'styled'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|eot|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 80000,
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public',
    chunkFilename: '[id].[chunkhash].js'
  }
};