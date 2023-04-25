var jslt = require("jslt");
var cloudinary = require('../../data/cloudinary.json')

exports.run = function run() {
  jslt.transform(cloudinary, {
    id: "{{asset_id}}",
    title: "{{filename}}",
    width: "{{width}}",
    height: "{{height}}",
    url: "{{secure_url}}"
  });
}
