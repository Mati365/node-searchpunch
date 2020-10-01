const path = require('path');

const pkgResolve = (pkgPath) => path.resolve(__dirname, path.join('../', pkgPath));

module.exports = {
  mode: 'production',
  target: 'web',
  entry: pkgResolve('src/main.ts'),
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
    filename: 'union-struct.js',
    path: path.resolve(__dirname, '../dist/'),
  },
};
