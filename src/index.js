/**
 * @param {array} words
 * @param {string} words.text
 * @param {Number} words.start
 * @param {Number} words.end
 * @returns {string} - tsv
 * Helper functions to serialize and de-serialize array of words into a tsv string
  example words list
  ```
  [
    {
      "id": 0,
      "start": 1.4,
      "end": 3.9,
      "text": "Can"
    },
    {
      "id": 1,
      "start": 3.9,
      "end": 4,
      "text": "you"
    },
    {
      "id": 2,
      "start": 4,
      "end": 4.1,
      "text": "hear"
    },
    {
      "id": 3,
      "start": 4.1,
      "end": 4.2,
      "text": "it?"
    },
    ..
]
```
example converted tsv string
```
1.4\t	3.9\t	Can\n
3.9\t	4\t	you\n
4\t	4.1\t	hear\n
4.1\t	4.2\t	it?\n
```
 */
function serializeToTsv({ words, reduceSize, textAttribute }) {
  return words
    .map((word) => {
      let start = word.start;
      let end = word.end;
      let text = word.text;
      if (reduceSize) {
        start = parseFloat(parseFloat(start).toFixed(1));
        end = parseFloat(parseFloat(end).toFixed(1));
      }
      if (textAttribute) {
        text = word[textAttribute];
      }
      return `${start}\t${end}\t${text}`;
    })
    .join('\n');
}

/**
 *
 * @param {strirng} data
 * @return {array} list of words objects
 */
function deserializeTsvOfWords({ data, textAttribute }) {
  return data.split('\n').map((w) => {
    const warray = w.split('\t');
    let text = warray[2];

    const word = {
      start: parseFloat(warray[0]),
      end: parseFloat(warray[1]),
    };
    if (textAttribute) {
      word[textAttribute] = text;
    } else {
      word.text = text;
    }
    return word;
  });
}

module.exports.serializeToTsv = serializeToTsv;
module.exports.deserializeTsvOfWords = deserializeTsvOfWords;
