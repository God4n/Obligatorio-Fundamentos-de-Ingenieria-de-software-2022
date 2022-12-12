const path = require('path');
const autoprefixer = require('autoprefixer');

function tryResolve_(url, sourceFilename) {
    // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
    // when the importer throws
    try {
      return require.resolve(url, {paths: [path.dirname(sourceFilename)]});
    } catch (e) {
      return '';
    }
}

function tryResolveScss(url, sourceFilename) {
    // Support omission of .scss and leading _
    const normalizedUrl = url.endsWith('.scss') ? url : `${url}.scss`;
    return tryResolve_(normalizedUrl, sourceFilename) ||
      tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
        sourceFilename);
  }

function materialImporter(url, prev) {
    if (url.startsWith('@material')) {
      const resolved = tryResolveScss(url, prev);
      return {file: resolved || url};
    }
    return {file: url};
  }

module.exports = {
    mode: 'development',
    entry: ['./styles/index.scss', './scripts/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve('./public/')
    },
    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [
                    // {
                    //    loader: MiniCssExtractPlugin.loader,
                    //    options: { publicPath: "",esModule: false,
                    // }
                    // }, 
                    {
                        loader: 'file-loader',
                        options: {
                          name: 'bundle.css',
                        },
                      },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                          postcssOptions: {
                            plugins: [
                              autoprefixer()
                            ]
                          }
                        } 
                      },
                      {
                        loader: 'sass-loader',
                        options: {   
                          // Prefer Dart Sass
                          implementation: require('sass'),
                          // See https://github.com/webpack-contrib/sass-loader/issues/804
                          webpackImporter: false,
                          sassOptions: {
                            importer: materialImporter,
                            includePaths: ['./node_modules'],
                          },
                        },
                      }
                ],
            },
        ]
    },
    resolve: {
        extensions: [".js",".json"]
    }
}