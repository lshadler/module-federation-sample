const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: './src/index',
  devtool: 'source-map',
  output: {
    publicPath: 'http://localhost:3002/',
  },
  optimization: {
    minimize: mode === 'production',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
    ],
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
    compress: true,
    port: 3002,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'landing_page',
      library: { type: 'var', name: 'landing_page' },
      filename: 'remoteEntry.js',
      remotes: {
        'components': 'components',
      },
      shared: { 
        react: { 
          singleton: true 
        }, 
        "react-dom": { 
          singleton: true 
        } 
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};