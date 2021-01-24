const fs = require('fs');
const zlib = require('zlib');

function generateRandomeTimecode() {
  //   return parseFloat(parseFloat(Math.random()).toFixed(2));
  return parseFloat(Math.random());
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

const compressed = zlib.gzipSync(JSON.stringify(longListOfWords));

console.log(compressed);
// //  333K
fs.writeFileSync('./throwaway/long-list-of-words.json.gz', compressed);

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

//   14M
fs.writeFileSync('./throwaway/moby-list-of-words.json', JSON.stringify(mobyWords, null, 2));
// 8.6M
fs.writeFileSync('./throwaway/moby-list-of-words-2.json', JSON.stringify(mobyWords));

const mobyCompressed = zlib.gzipSync(JSON.stringify(mobyWords));
//  1.5M
fs.writeFileSync('./throwaway/moby-list-of-words..json.gz', mobyCompressed);

console.log(compressed);
