const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.module.(s(a|c)ss)$/,
      use: {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.join(__dirname, 'styles/variables/breakpoints.scss'),
            path.join(__dirname, 'styles/variables/colors.scss'),
            path.join(__dirname, 'styles/variables/fonts.scss'),
          ],
        },
      },
    });

    return config;
  },
};
