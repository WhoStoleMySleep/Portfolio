const { model, Schema } = require('mongoose');

const customCakesSchema = new Schema({
  id: String,
  customCakes: [[String]]
});

module.exports = model('CustomCakes', customCakesSchema);
