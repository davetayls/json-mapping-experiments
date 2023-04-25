const transform = require('jsonpath-object-transform')
var cloudinary = require('../../data/cloudinary.json')

exports.run = function run() {
  const template = {
    id: "$.asset_id",
    title: "$.filename",
    width: "$.width",
    height: "$.height",
    url: "$.secure_url"
  }
  return transform(cloudinary, template)
}
