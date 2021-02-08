import { terser } from 'rollup-plugin-terser';
import sizes from 'rollup-plugin-sizes';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import html from "rollup-plugin-html";
import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';  
import globals from 'rollup-plugin-node-globals';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'Iris',
      file: 'dist/browser.js',
      format: 'umd',
    },
    plugins: [
        html({
          include: '**/*.html',
        }),
        sizes(), 
        babel({ babelHelpers: 'bundled' }), 
        terser(),
        resolve(),
        commonJS({
            include: 'node_modules/**'
        }),
        globals(),
        
    ],
    
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'src/index.js',
    output: [
      { file: 'dist/main.js', format: 'cjs' },
      { file: 'dist/module.js', format: 'es' },
    ],
    plugins: [
        html({
          include: '**/*.html',
        }),
        sizes(), 
        babel({ babelHelpers: 'bundled' }),
        resolve(),
        commonJS({
            include: 'node_modules/**'
        }),
        globals(),
    ],
  },

  // Generate example html
  {
    input: 'src/index.js',
    output: {
      dir: 'dist',
      format: 'umd',
    },
    plugins: [
      html({
        include: '**/*.html',
      }),
      sizes(), 
      babel({ babelHelpers: 'bundled' }),
      htmlTemplate({
        template: 'src/template.html',
        target: 'index.html',
      }),
      resolve(),
      commonJS({
          include: 'node_modules/**'
      }),
      globals(),
    ],
  },
];