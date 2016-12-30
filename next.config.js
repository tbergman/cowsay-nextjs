module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.preLoaders = [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      }];
      config.eslint = {
        configFile: './.eslintrc'
      };
    }
    return config;
  }
};