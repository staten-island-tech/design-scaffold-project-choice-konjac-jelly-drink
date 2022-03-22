module.exports = function (eleventyConfig) {
  eleventyConfig.addPasshroughCopy("src/style");
  eleventyConfig.addPasshroughCopy("src/md");
  eleventyConfig.addPasshroughCopy("src/media");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
