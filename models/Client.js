const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  initials: String
});

module.exports = mongoose.model('Client', clientSchema);
