/* eslint-disable */
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  distDir: '../build',
  pageExtensions: ['jsx', 'js'],
  webpack(config, { dev }) {
    config.resolve.alias['components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['public'] = path.join(__dirname, 'src/public');
    config.resolve.alias['shared'] = path.join(__dirname, 'src/shared');
    config.resolve.alias['lib'] = path.join(__dirname, 'src/lib');
    config.resolve.alias['graphql'] = path.join(__dirname, 'src/graphql');
    config.resolve.alias['screens'] = path.join(__dirname, 'src/screens');
    config.resolve.alias['helpers'] = path.join(__dirname, 'src/helpers');
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];
    config.module.rules.push(
      {
        test: /\.(jpg|gif|png|svg|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // sample options
              limit: 8192,
              outputPath: '...',
              context: 'src',
              name: '[path][name].[hash:8].[ext]',
              publicPath: `your/public/path`,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['scss', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      },
    );

    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries['main.js'] &&
        !entries['main.js'].includes(path.join(__dirname, 'client/polyfills.js'))
      ) {
        entries['main.js'].unshift(path.join(__dirname, 'client/polyfills.js'));
      }

      return entries;
    };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

const withSass = require('@zeit/next-sass');
module.exports = withSass();
