const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style");
  eleventyConfig.addPassthroughCopy("src/md");
  eleventyConfig.addPassthroughCopy("src/media");
  require("nunjucks");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
