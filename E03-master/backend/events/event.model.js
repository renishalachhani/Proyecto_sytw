const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  eventName: { type: String, required: true },
  beginDate: { type: Date, required: true },
  endDate: { type: Date },
  description: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String },
  guests: [{ type: mongoose.ObjectId, ref: 'User' }],
  creator: { type: mongoose.ObjectId, ref: 'User', required: true },
})
schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Event', schema)
