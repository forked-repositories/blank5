const Koa = require('koa')
const request = require('supertest')
const PassThrough = require('stream').PassThrough

const minifier = require('..')

const options = {
  collapseWhitespace: true
}

describe('Koa HTML Minifier 2', () => {
  describe('when the response is HTML', () => {
    const input = '<div> <p>    foo </p>    </div>'
    const output = '<div><p>foo</p></div>'

    describe('and the body is empty', () => {
      it('should not crash', done => {
        const app = new Koa()
        app.use(minifier(options))
        app.use(cxt => cxt.body = null)

        request(app.listen())
          .get('/')
          .expect(204, done)
      })
    })

    describe('and the body is a string', () => {
      it('should minify', done => {
        const app = new Koa()
        app.use(minifier(options))
        app.use(cxt => cxt.body = input)

        request(app.listen())
          .get('/')
          .expect(200)
          .expect('Content-Type', /text\/html/)
          .expect(output, done)
      })
    })

    describe('and the body is a buffer', () => {
      it('should minify', done => {
        const app = new Koa()
        app.use(minifier(options))
        app.use(cxt => {
          cxt.response.type = 'html'
          cxt.body = new Buffer(input, 'utf8')
        })

        request(app.listen())
          .get('/')
          .expect(200)
          .expect(output, done)
      })
    })

    describe('and the body is an object', () => {
      it('should not crash', done => {
        const app = new Koa()
        app.use(minifier(options))
        app.use(cxt => {
          cxt.body = {}
          cxt.response.type = 'html'
        })

        request(app.listen())
          .get('/')
          .expect(200, done)
      })
    })

    describe('and the body is a stream', () => {
      it('should not minify', done => {
        const app = new Koa()
        app.use(minifier(options))
        app.use(cxt => {
          cxt.response.type = 'html'
          const stream = cxt.body = new PassThrough()
          stream.end(input)
        })

        request(app.listen())
          .get('/')
          .expect(200)
          .expect(input, done)
      })
    })
  })

  describe('when the response is not HTML', () => {
    it('should do nothing', done => {
      const text = 'lol     < > <3'
      const app = new Koa()
      app.use(minifier(options))
      app.use(cxt => cxt.body = text)

      request(app.listen())
        .get('/')
        .expect(200)
        .expect(text, done)
    })
  })
})
