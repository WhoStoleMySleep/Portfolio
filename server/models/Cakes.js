const { model, Schema } = require('mongoose');

const cakesSchema = new Schema({
  id: String,
  image: String,
  title: String,
  category: String,
  amount: String,
  description: String,
  mass: String,
  content: String,
  composition: String,
  additionally: String
});

module.exports = model('Cakes', cakesSchema);
