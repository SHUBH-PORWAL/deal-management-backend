const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  clientInitials: String,
  dealName: { type: String, required: true },
  budget: { type: Number, required: true },
  status: { type: String, default: 'Negotiating' },
  assignee: String,
  assigneeInitials: String,
  createdDate: { type: Date, default: Date.now },
  priority: { type: String, default: 'Medium' }
});

module.exports = mongoose.model('Deal', dealSchema);
