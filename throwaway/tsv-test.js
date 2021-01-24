const fs = require('fs');
const { serializeToTsv, deserializeTsvOfWords } = require('../src/index.js');

function generateRandomeTimecode() {
  return parseFloat(parseFloat(Math.random()).toFixed(2));
}
// 285K
const longText = fs.readFileSync('./throwaway/text.txt').toString('utf8');

// creating mock list of timed words as if this 5h30m was from STT
// 50 477
const longListOfWords = longText
  .split('\n')
  .join(' ')
  .split(' ')
  .map((word) => {
    return {
      start: generateRandomeTimecode(),
      end: generateRandomeTimecode(),
      text: word,
    };
  });

console.log(longListOfWords.length);
// 3.1M
fs.writeFileSync('./throwaway/long-list-of-words.json', JSON.stringify(longListOfWords, null, 2));
//  2.0M
fs.writeFileSync('./throwaway/long-list-of-words-2.json', JSON.stringify(longListOfWords));

const tsv = serializeToTsv(longListOfWords);
//  767K
fs.writeFileSync('./throwaway/long-list-of-words.tsv', tsv);

const tsv2 = serializeToTsv(longListOfWords, true);
//  662K
fs.writeFileSync('./throwaway/long-list-of-words-compressed.tsv', tsv2);

///////// Moby example.
// Moby dick would be roughly 20 hours.
// we are mostly interested in getting to work to fit up to 8 hours. which is max GCP can transcribe. Or if not close to it.

// 1.2M
const mobyText = fs.readFileSync('./throwaway/moby.txt').toString('utf8');

// creating mock list of timed words as if moby was from STT
// 223 456
const mobyWords = mobyText
  .split('\n')
  .join(' ')
  .split(' ')
  .map((word) => {
    return {
      start: generateRandomeTimecode(),
      end: generateRandomeTimecode(),
      text: word,
    };
  });

console.log(mobyWords.length);

// 14M
fs.writeFileSync('./throwaway/moby-list-of-words.json', JSON.stringify(mobyWords, null, 2));
// 8.6M
fs.writeFileSync('./throwaway/moby-list-of-words-2.json', JSON.stringify(mobyWords));

const tsvMoby = serializeToTsv(mobyWords);
//  3.3M
fs.writeFileSync('./throwaway/moby-list-of-words.tsv', tsvMoby);

const tsvMoby2 = serializeToTsv(mobyWords, true);
//  2.8M
fs.writeFileSync('./throwaway/moby-list-of-words-compressed.tsv', tsvMoby2);
