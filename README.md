# Koa HTML Minifier 2

[![License MIT](https://img.shields.io/npm/l/koa-html-minifier2.svg)](https://github.com/zhuweiyou/koa-html-minifier2/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/zhuweiyou/koa-html-minifier2.svg?branch=master)](https://travis-ci.org/zhuweiyou/koa-html-minifier2)
[![Coverage Status](https://coveralls.io/repos/github/zhuweiyou/koa-html-minifier2/badge.svg?branch=master)](https://coveralls.io/github/zhuweiyou/koa-html-minifier2?branch=master)
[![NPM Version](https://img.shields.io/npm/v/koa-html-minifier2.svg)](https://www.npmjs.com/package/koa-html-minifier2)
[![NPM Download](https://img.shields.io/npm/dt/koa-html-minifier2.svg)](https://www.npmjs.com/package/koa-html-minifier2)

**It is the like as [koajs/html-minifier](https://github.com/koajs/html-minifier), and supports `koa 2.x`.**

Middleware that minifies your HTML responses using [html-minifier](https://github.com/kangax/html-minifier).
It uses `html-minifier`'s default options which are all turned off by default,
so you __have__ to set the options otherwise it's not going to do anything.

## Install

```bash
npm i --save koa-html-minifier2
```

## Usage

```js
const htmlMinifier2 = require('koa-html-minifier2')

app.use(htmlMinifier2({
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true
}))
```

### Options

See: https://github.com/kangax/html-minifier#options-quick-reference
