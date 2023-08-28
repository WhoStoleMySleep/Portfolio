const { model, Schema } = require('mongoose');

const customCakesSchema = new Schema({
  id: String,
  image: String,
  description: String,
  name: String,
  email: String,
  number: String
});

module.exports = model('CustomCakes', customCakesSchema);
