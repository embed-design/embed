const sitemap = require('nextjs-sitemap-generator')
module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    }
  };

sitemap({
  baseUrl: 'https://embeddesign.in',
  pagesDirectory: __dirname + "/pages",
  targetDirectory: 'public/'
})