const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
});

module.exports = mongoose.model('Game', gameSchema);
