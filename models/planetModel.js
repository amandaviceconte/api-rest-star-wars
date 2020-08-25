const mongoose = require('mongoose');

const { Schema } = mongoose;

const planetModel = new Schema({
  name: { type: String },
  climate: { type: String },
  terrain: { type: String },
  appearances: { type: Number, default: null },
});

module.exports = mongoose.model('Planet', planetModel);
