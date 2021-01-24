const { serializeToTsv, deserializeTsvOfWords } = require('./index.js');
const soleioWorldListExample = require('./sample-data/Soleio Cuervo.json').words;

const tsvSample = `1.4\t3.9\tan\n3.9\t4\tyou\n4\t4.1\thear\n4.1\t4.2\tit?`;

const words = deserializeTsvOfWords(tsvSample);
console.log(words);

//

const tsv = serializeToTsv(soleioWorldListExample);
console.log(tsv);

const wordsList = deserializeTsvOfWords(tsv);

console.log(wordsList);
