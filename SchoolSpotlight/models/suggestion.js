const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuggestionSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  // points: { type: Number, default: 0 }
});

module.exports = mongoose.model('Suggestion', SuggestionSchema);
