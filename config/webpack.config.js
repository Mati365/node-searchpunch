const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

const {NODE_ENV} = process.env;
const devBuild = NODE_ENV !== 'production';

const pkgResolve = (pkgPath) => path.resolve(__dirname, path.join('../', pkgPath));
const createBuildConfig = ({entry, output, withNodemon}) => ({
  mode: NODE_ENV || 'development',
  watch: devBuild,
  target: 'node',
  entry: pkgResolve(entry),
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitError: false,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          onlyCompileBundledFiles: true,
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
    ],
  },
  output: {
    filename: output,
    path: path.resolve(__dirname, '../dist/'),
  },
  plugins: [
    ...withNodemon ? [new NodemonPlugin] : [],
  ],
});

module.exports = createBuildConfig(
  {
    entry: 'packages/searchpunch-core/src/index.ts',
    output: 'searchpunch-core.js',
    withNodemon: true,
  },
);
