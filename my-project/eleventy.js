module.exports = function(eleventyConfig) {
     eleventyConfig.addPassthroughCopy("src/styles");
     eleventyConfig.addPassthroughCopy("src/");
    return{
        dir:{
            input:"src",
            output:"dist",
        },
    };
};
