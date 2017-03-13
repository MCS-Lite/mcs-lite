/* eslint no-console:0 */

import fs from 'fs';
import R from 'ramda';
import glob from 'glob';
import path from 'path';
import Rx from 'rxjs/Rx';
import { compile } from './utils';

const srcPattern = process.argv[2];
const desPath = process.argv[3];

process.env.NODE_ENV = 'production'; // for babel

// --- /src/a.js --- /src/b.js --- ...
const srcPath$ = Rx.Observable
  .of(srcPattern)
  .switchMap(pattern => Rx.Observable.from(glob.sync(pattern)));

// --- a --- b --- ...
const basename$ = srcPath$
  .map(srcPath => path.basename(srcPath, path.extname(srcPath)));

// --- 'export a' --- 'export b' --- ...
const strings$ = basename$
  .map(basename => `export { default as ${basename} } from './${basename}';`);

// --- 'export a \n export b' |
const resultsES6$ = strings$
  .toArray()
  .map(R.join('\n'));

const resultsES5$ = resultsES6$
  .map(compile);

// Output
resultsES5$
  .do((results) => {
    fs.writeFileSync(desPath, results);
    console.log(`${path.relative(process.cwd(), srcPattern)} -> ${path.relative(process.cwd(), desPath)}`);
  })
  .catch(console.error)
  .subscribe();
