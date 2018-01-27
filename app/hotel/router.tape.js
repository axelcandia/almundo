var app = require('app/test-app')
var test = require('tape')

test('GET /api/hotel should send JSON list', function (assert) {
  app.get('/api/hotel')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(assert.end)
}) 
