import * as ts from 'typescript';
import { join } from 'path';

const program = ts.createProgram(
  [join(__dirname, 'main.ts')],
  {
    paths: {
      '@/*': ['src/*'],
    },
  },
);

const files = program.getSourceFiles()
  .map(sourceFile => sourceFile.fileName)
  .filter(fileName => !fileName.includes('node_modules'));

console.log(files);