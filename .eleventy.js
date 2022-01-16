const path = require("node:path");

const dir = {
  input: "src",
  output: "www",
};

function inputDir(p = "", base=dir.input) {
  return path.join(base, p);
}

module.exports = (eleventyConfig) => {
  const eleventyPkg = require("@11ty/eleventy/package.json");
  console.log(`${eleventyPkg.name} v${eleventyPkg.version}`);

  eleventyConfig.addPassthroughCopy(inputDir(".well-known"));
  eleventyConfig.addPassthroughCopy(inputDir("**/*.{jpg,svg,png}"));

  return {
    dir,
  };
};
