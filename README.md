# Koa HTML Minifier 2

[![Build Status](https://travis-ci.org/zhuweiyou/koa-html-minifier2.svg?branch=master)](https://travis-ci.org/zhuweiyou/koa-html-minifier2)
[![npm version](https://img.shields.io/npm/v/koa-html-minifier2.svg)](https://www.npmjs.com/package/koa-html-minifier2)

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
