const mongoose = require('mongoose');

const { Schema } = mongoose;

const planetModel = new Schema({
  nome: { type: String },
  clima: { type: String },
  terreno: { type: String },
  qtdAparicoes: { type: Number, default: null },
});

module.exports = mongoose.model('Planet', planetModel);
