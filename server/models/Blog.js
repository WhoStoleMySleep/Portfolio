const { model, Schema } = require('mongoose');

const blogSchema = new Schema({
  id: String,
  headImageLink: String,
  name: [String],
  tags: String,
  conciseContent: [String],
  date: String,
  author: String,
  text: [[String]],
});

module.exports = model('Blog', blogSchema);
