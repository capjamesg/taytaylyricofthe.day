module.exports = function(eleventyConfig) {
    const lyric = require('./today.json');

    eleventyConfig.addShortcode("lyricToday", function() {
        return lyric.lyric;
    });
    eleventyConfig.addShortcode("answerToday", function() {
        return lyric.answer.replace(/[^a-zA-Z ]/g, "");
    });
};
