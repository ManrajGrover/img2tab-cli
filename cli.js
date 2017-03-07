#!/usr/bin/env node

const yargs = require('yargs');
const Img2tab = require('img2tab');
const clipboardy = require('clipboardy');
const fs = require('fs');
const path = require('path');

const argv = yargs
  .usage('$0 [options]')
  .demand(['s'])
  .alias('s', 'source')
    .describe('s', 'Source path/url')
  .alias('o', 'output')
    .describe('o', 'Path to output file')
  .alias('c', 'clipboard')
    .describe('c', 'Copy to clipboard')
    .boolean('c')
  .alias('w', 'width')
    .describe('w', 'Width per pixel')
  .alias('hi', 'height')
    .describe('hi', 'Height per pixel')
  .help('h')
  .alias('h', 'help')
  .argv;


const source = argv.s;
const width = argv.wi;
const height = argv.hi;

const img2tabInst = new Img2tab(source, width, height);

img2tabInst.getTable().then((table) => {
  if (argv.c) {
    clipboardy.writeSync(table);
  } else if (argv.o) {
    const outputPath = path.join(__dirname, argv.o);
    fs.writeFileSync(outputPath, table);
  } else {
    console.log(table);
  }
}).catch(err => console.log(`${err}`));
