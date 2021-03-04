const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: './src/index',
  devtool: 'source-map',
  optimization: {
    minimize: mode === 'production',
  },
  output: {
    publicPath: 'http://localhost:3003/'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.tsx', '.ts'],
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
    port: 3003,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'components',
      library: { type: 'var', name: 'components' },
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header',
        './Footer': './src/Footer'
      },
      shared: [{ 
        react: { 
          singleton: true 
        }, 
        "react-dom": { 
          singleton: true 
        } 
      }],
    }),
  ],
};