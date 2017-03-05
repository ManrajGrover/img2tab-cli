#!/usr/bin/env node

const yargs = require('yargs');
const Img2tab = require('img2tab');

const argv = yargs
  .usage('$0 <command>')
  .demand(['s'])
  .alias('s', 'source')
    .describe('s', 'Source path/url')
  .alias('o', 'output')
    .describe('o', 'Path to output file')
  .alias('c', 'clipboard')
    .describe('c', 'Copy to clipboard')
  .help('h')
  .alias('h', 'help')
  .argv;
