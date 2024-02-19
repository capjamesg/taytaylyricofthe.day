// open lyrics/lyrics2.json, choose random item
const fs = require('fs');

const lyrics = require('./lyrics2.json');

var lyric = null;

// while lyric doesn't contain a word > 3 characters
while (lyric === null || lyric.length < 3) {
    lyric = lyrics[Math.floor(Math.random() * lyrics.length)]["lyric"];
}

// remove random word > 3 characters and save to var
// get random word
var word = lyric.split(' ')[Math.floor(Math.random() * lyric.split(' ').length)];
// remove word

lyric = lyric.replace(word, '[word]');

// remove symbols from word
word = word.replace(/[^a-zA-Z ]/g, "");

var result = {
    "lyric": lyric,
    "answer": word
};

fs.writeFileSync('./today.json', JSON.stringify(result, null, 2));