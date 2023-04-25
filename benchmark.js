const b = require('benny')
const jslt = require('./suite/basic/jslt')
const jsonpath = require('./suite/basic/jsonpath-plus')
const jsonpathObjectTransform = require('./suite/basic/jsonpath-object-transform')

b.suite(
  'Basic Mapping',

  b.add('jslt', () => {
    jslt.run()
  }),

  b.add('jsonpath-plus', () => {
    jsonpath.run()
  }),

  b.add('jsonpath-object-transform', () => {
    jsonpathObjectTransform.run()
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: 'reduce', version: '1.0.0' }),
  b.save({ file: 'reduce', format: 'chart.html' }),
)
