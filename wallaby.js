module.exports = function(wallaby) {
  return {
    files: [{ pattern: 'src/**/*.ts', load: false }],

    tests: [{ pattern: 'test/**/*Spec.ts', load: false }],

    postprocessor: wallaby.postprocessors.webpack({
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            }
          }
          // {
          //   test: /\.ts$/,
          //   exclude: /node_modules/,
          //   use: {
          //     loader: 'awesome-typescript-loader',
          //     options: {
          //       transpileOnly: true
          //     }
          //   }
          // }
        ]
      },
      resolve: {
        extensions: ['.ts', '.js']
      }
    }),

    env: {
      kind: 'chrome'
    },

    setup: function() {
      window.__moduleBundler.loadTests();
    }
  };
};
