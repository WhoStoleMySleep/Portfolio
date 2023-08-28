const { model, Schema } = require('mongoose');

const ourCakesSchema = new Schema({
  id: String,
  cakes: [[String]],
  price: String,
  name: String,
  email: String,
  number: String,
  sity: String,
  street: String,
  house: String,
  apartment: String,
  comment: String,
  date: String,
  timeInterval: String,
  paymentMethod: String
});

module.exports = model('OurCakes', ourCakesSchema);
