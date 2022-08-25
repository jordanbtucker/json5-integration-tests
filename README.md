# json5-integration-tests

A test suite for ensuring json5 works with Node.js, TypeScript, and webpack
using `require` and default and named `import`.

## Installation

```
git clone https://github.com/jordanbtucker/json5-integration-tests.git
cd json5-integration-tests
npm install
```

## Usage

To test a published version of json5, run:

```
npm install json5@<version>
npm test
```

To test an unpublished version of json5, run:

```
npm install <path-to-json5-directory>
npm test
```
