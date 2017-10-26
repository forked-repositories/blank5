const minify = require('html-minifier').minify

module.exports = (options = {}) => async (ctx, next) => {
  await next()
  if (!ctx.response.is('html')) {
    return
  }
  let body = ctx.body
  if (!body) {
    return
  }
  if (typeof body.pipe === 'function') {
    return
  }
  if (Buffer.isBuffer(body)) {
    body = body.toString('utf8')
  } else if (typeof body === 'object') {
    return
  }
  ctx.body = minify(body, options)
}
