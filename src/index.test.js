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

test.skip('words list to tsv', () => {
  const tsv = serializeToTsv(wordListSample);

  expect(tsv).toEqual(tsvSample);
});

test.skip('tsv to words list', () => {
  const words = deserializeTsvOfWords(tsvSample);

  expect(words).toEqual(wordListSample);
});

test('words list to tsv and back 1', () => {
  const tsv = serializeToTsv(wordListSample);
  const words = deserializeTsvOfWords(tsv);
  expect(wordListSample).toEqual(words);
});

test.skip('words list to tsv and back 2 - longer example', () => {
  const tsv = serializeToTsv(soleioWorldListExample);
  const words = deserializeTsvOfWords(tsv);
  expect(soleioWorldListExample).toEqual(words);
});
