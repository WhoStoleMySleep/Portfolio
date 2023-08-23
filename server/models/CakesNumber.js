const { model, Schema } = require('mongoose');

const cakesNumberSchema = new Schema({
  id: String,
  number: String,
});

module.exports = model('CakesNumber', cakesNumberSchema);
