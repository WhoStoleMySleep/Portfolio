const { model, Schema } = require('mongoose');

const ourCakesSchema = new Schema({
  id: String,
  order: [[String]],
});

module.exports = model('OurCakes', ourCakesSchema);
