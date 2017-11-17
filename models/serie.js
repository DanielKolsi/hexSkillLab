var mongoose = require('mongoose');

var SerieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  type: String,
  publisher: String,
  published_date: Date,
  description: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Serie', SerieSchema);