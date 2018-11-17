const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SuggestionSchema = new Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model('Suggestion', SuggestionSchema);
