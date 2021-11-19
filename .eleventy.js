const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./favicon.ico');
  
    //date formatting
    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // limit filter
    eleventyConfig.addFilter("limit", function(array, limit) {
      return array.slice(0, limit);
    });
  
    return {
      dir: {
        input: "src",
        output: "public"
      }
    };
  }