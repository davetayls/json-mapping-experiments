const { JSONPath } = require('jsonpath-plus')
var cloudinary = require('../../data/cloudinary.json')

exports.run = function run() {
  Object.entries({
    id: "$.asset_id",
    title: "$.filename",
    width: "$.width",
    height: "$.height",
    url: "$.secure_url"
  }).reduce((result, [prop, path]) => {
    result[prop] = JSONPath({ path, json: cloudinary })[0]
    return result
  }, {})
}
