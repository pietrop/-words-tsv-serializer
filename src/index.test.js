const { serializeToTsv, deserializeTsvOfWords } = require('./index.js');
const soleioWorldListExample = require('./sample-data/Soleio Cuervo.json').words;
const wordListSample = [
  {
    start: 1.4,
    end: 3.9,
    text: 'Can',
  },
  {
    start: 3.9,
    end: 4,
    text: 'you',
  },
  {
    start: 4,
    end: 4.1,
    text: 'hear',
  },
  {
    start: 4.1,
    end: 4.2,
    text: 'it?',
  },
];

const tsvSample = `1.4\t3.9\tCan\n3.9\t4\tyou\n4\t4.1\thear\n4.1\t4.2\tit?`;

test('words list to tsv', () => {
  const tsv = serializeToTsv({ words: wordListSample });

  expect(tsv).toEqual(tsvSample);
});

test('words list to tsv - compressed rounded', () => {
  const tsv = serializeToTsv({ words: wordListSample, reduceSize: true });

  expect(tsv).toEqual(tsvSample);
});

test('tsv to words list', () => {
  const words = deserializeTsvOfWords(tsvSample);

  expect(words).toEqual(wordListSample);
});

test('tsv to words list - compressed rounded', () => {
  const words = deserializeTsvOfWords(tsvSample);

  expect(words).toEqual(wordListSample);
});

test('words list to tsv and back 1', () => {
  const tsv = serializeToTsv({ words: wordListSample });
  const words = deserializeTsvOfWords(tsv);
  expect(wordListSample).toEqual(words);
});

test('words list to tsv and back 1 - compressed rounded', () => {
  const tsv = serializeToTsv({ words: wordListSample, reduceSize: true });
  const words = deserializeTsvOfWords(tsv);
  expect(wordListSample).toEqual(words);
});

test('words list to tsv and back 2 - longer example', () => {
  const tsv = serializeToTsv({ words: soleioWorldListExample });
  const words = deserializeTsvOfWords(tsv);
  expect(soleioWorldListExample).toEqual(words);
});

// if the original word list timecodes are longer 1 decimal approximation, then compressing and decompressing
// into tsv is not going to be lossless.
// eg word.start 1.9393 will be rounded 1.9
test('words list to tsv and back 2 - longer example - compressed rounded', () => {
  const tsv = serializeToTsv({ words: soleioWorldListExample, reduceSize: true });
  const words = deserializeTsvOfWords(tsv);
  expect(soleioWorldListExample).not.toEqual(words);
});

test('words list to tsv and back 2 - longer example - compressed rounded', () => {
  const tsv = serializeToTsv({ words: soleioWorldListExample, reduceSize: true });
  const words = deserializeTsvOfWords(tsv);
  expect(soleioWorldListExample.length).toEqual(words.length);
});
