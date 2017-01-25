import svgToJsx from 'svg-to-jsx';
import fs from 'fs';
import path from 'path';
import Rx from 'rxjs/Rx';
import * as babel from 'babel-core';
import camelCase from 'lodash.camelcase';
import upperFirst from 'lodash.upperfirst';
import template from './template';

const spawnSync = require('child_process').spawnSync;

const babelOptions = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, '..', '.babelrc'),
  'utf8',
));
babelOptions.babelrc = false;

const srcDir = 'node_modules/mcs-lite-design/icon';

const filename$ = Rx.Observable
  .from([srcDir])
  .switchMap(dirPath => Rx.Observable.from(fs.readdirSync(dirPath)));

const componentName$ = filename$
  .map(filename => path.basename(filename, path.extname(filename)))
  .map(name => `Icon-${name}`)
  .map(camelCase)
  .map(upperFirst);

const jsx$ = filename$
  .map(filename => fs.readFileSync(path.resolve(srcDir, filename), 'utf-8'))
  .mergeMap(svg => Rx.Observable.fromPromise(svgToJsx(svg)));

Rx.Observable
  .zip(componentName$, jsx$)
  .do(([name, jsx]) => {
    const transformed = babel.transform(template({ name, jsx }), babelOptions).code;
    const destPath = path.resolve('lib', `${name}.js`);
    spawnSync('mkdir', ['-p', path.dirname(destPath)]);

    fs.writeFileSync(destPath, transformed);

    console.log(`${srcDir}/${name} -> ${destPath}`);
  })
  .catch(console.error)
  .subscribe()
