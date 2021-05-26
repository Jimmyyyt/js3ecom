const mongodb = require('mongoose');

const productSchema = mongodb.Schema({

  name: { type: String, required: true, unique: true },
  short: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  countInStock: { type: Number, required: true },
  rating: { type: Number, required: true },
  numReviews: { type: Number, required: true },

  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }


})


module.exports = mongodb.model('Product', productSchema);