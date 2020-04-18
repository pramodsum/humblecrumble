const dotenvConfig = require("dotenv").config();
const webpack = require("webpack");

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(dotenvConfig.parsed));

    return config;
  },
};
