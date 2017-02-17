/* eslint no-console:0 */

import fs from 'fs';
import path from 'path';
import Rx from 'rxjs/Rx';
import camelCase from 'lodash.camelcase';
import upperFirst from 'lodash.upperfirst';
import { spawnSync } from 'child_process';
import { parseSVG, compile, template } from './utils';

const srcDir = process.argv[2];
const desDir = process.argv[3];

process.env.NODE_ENV = 'production'; // for babel

// --- /lib/a.svg --- /lib/b.svg --- ...
const srcPath$ = Rx.Observable
  .from([srcDir])
  .switchMap(dirPath => Rx.Observable.from(fs.readdirSync(dirPath)))
  .map(basename => path.resolve(srcDir, basename));

// --- IconA --- IconB --- ...
const componentName$ = srcPath$
  .map(filepath => path.basename(filepath, path.extname(filepath)))
  .map(camelCase)
  .map(upperFirst);

// --- xmlA --- xmlB --- ...
const xml$ = srcPath$
  .map(filepath => fs.readFileSync(filepath, 'utf-8'));

// --- codeA --- codeB --- ...
const code$ = Rx.Observable
  .zip(componentName$, xml$)
  .map(([componentName, xml]) => compile(template(componentName, parseSVG(xml))));

// --- ./lib/IconA.js --- ./lib/IconB.js --- ...
const destPath$ = componentName$
  .map(componentName => path.resolve(desDir, `${componentName}.js`))
  .do(destPath => spawnSync('mkdir', ['-p', path.dirname(destPath)]));

Rx.Observable
  .zip(srcPath$, code$, destPath$)
  .do(([srcPath, code, destPath]) => {
    fs.writeFileSync(destPath, code);
    console.log(`${path.relative(process.cwd(), srcPath)} -> ${path.relative(process.cwd(), destPath)}`);
  })
  .catch(console.error)
  .subscribe();
