## Brief of the project

<!-- _One liner + link to confluence page_
_Screenshot of UI - optional_ -->

Helper functions to serialize and de-serialize array of words into a tsv string.

Mainly aimed at redusing payload size for saving data in firebase. Firebase a size limit of 1mb per document.

Used as part of [pietrop/digital-paper-edit-firebase](https://github.com/pietrop/digital-paper-edit-firebase)

## Setup

<!-- _stack - optional_
_How to build and run the code/app_ -->

```
git clone git@github.com:pietrop/words-tsv-serializer.git
```

```
cd words-tsv-serializer
```

```
npm install
```

## Usage

```
npm install @pietrop/words-tsv-serializer
```

<details>
  <summary><code>serializeToTsv</code></summary>
  
```js
const { serializeToTsv } = require('@pietrop/words-tsv-serializer');
// a list of words from somewhere
const soleioWorldListExample = require('./src/sample-data/Soleio Cuervo.json').words;
const tsv = serializeToTsv(soleioWorldListExample);
// do somethign with the tsv eg write to a file, save to a db etc..
console.log(tsv);
```
</details>

<details>
  <summary><code>deserializeTsvOfWords</code></summary>

```js
const { deserializeTsvOfWords } = require('@pietrop/words-tsv-serializer');
// an example tsv
const tsv = `1.4\t3.9\tan\n3.9\t4\tyou\n4\t4.1\thear\n4.1\t4.2\tit?`;
const words = deserializeTsvOfWords(tsv);
console.log(words);
```

</details>

## System Architecture

Thought process discussed in this [ADR - Saving word level transcripts in Firebase](https://github.com/pietrop/digital-paper-edit-firebase/blob/master/docs/ADR/2019-11-27-firestore-saving-timed-transcripts.md#8-convert-to-a-collection-of-3-tsv-documents) from [pietrop/digital-paper-edit-firebase](https://github.com/pietrop/digital-paper-edit-firebase).

<!-- _High level overview of system architecture_ -->

<!-- ## Documentation

There's a [docs](./docs) folder in this repository.

[docs/notes](./docs/notes) contains dev draft notes on various aspects of the project. This would generally be converted either into ADRs or guides when ready.

[docs/adr](./docs/adr) contains [Architecture Decision Record](https://github.com/joelparkerhenderson/architecture_decision_record).

> An architectural decision record (ADR) is a document that captures an important architectural decision made along with its context and consequences.

We are using [this template for ADR](https://gist.github.com/iaincollins/92923cc2c309c2751aea6f1b34b31d95) -->

## Development env

 <!-- _How to run the development environment_ -->

- npm > `6.1.0`
- [Node 10 - dubnium](https://scotch.io/tutorials/whats-new-in-node-10-dubnium)

Node version is set in node version manager [`.nvmrc`](https://github.com/creationix/nvm#nvmrc)

```
nvm use
```

<!-- _Coding style convention ref optional, eg which linter to use_ -->

<!-- _Linting, github pre-push hook - optional_ -->

## Build

<!-- _How to run build_ -->

_NA_

## Tests

<!-- _How to carry out tests_ -->

```
npm test
```

## Deployment

<!-- _How to deploy the code/app into test/staging/production_ -->

```
npm run publish:public
```
