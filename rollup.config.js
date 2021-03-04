import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import {uglify} from 'rollup-plugin-uglify';
import banner from 'rollup-plugin-banner';
import json from 'rollup-plugin-json';
import pkg from './package.json';
import merge from 'webpack-merge';

let year = new Date().getFullYear(),
    version = pkg.version;

let bannerText = `gazlibrary v${version}
(c) 2021-${year} weijhfly https://github.com/gengqingming/gazlibrary.git
Licensed under MIT
Released on: 2021-03-04`;

let config = {
  input: 'src/index.ts',
  output: {
    name:'tks',
    file: 'dist/gazlibrary.min.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs({
      include: /node_modules/
    }),
    json(),
    typescript(),
    banner(bannerText),
  ]
};

let [min, es, cjs] = [merge({}, config), merge({}, config), merge({}, config)];

min.output.file = 'dist/gazlibrary.min.js';
min.plugins.unshift(uglify());

es.output.file = 'dist/gazlibrary.min.js';
es.output.format = 'es';

cjs.output.file = 'dist/gazlibrary.min.js';
cjs.output.format = 'cjs';

export default [config, min, es, cjs];