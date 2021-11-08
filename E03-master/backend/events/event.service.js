const db = require('_helpers/db')
const Event = db.Event

module.exports = {
  getAll,
  getById,
  create,
  update,
  join,
  unjoin,
  delete: _delete,
}

async function getAll() {
  return await Event.find().select('-__v')
}
async function getById(id) {
  return await Event.findById(id).select('-__v')
}
async function create(params, creator) {
  let { event } = params
  event.creator = creator

  event = new Event(event)
  await event.save()
}
async function update(id, params, user) {
  const event = await Event.findById(id)
  if (!event) throw 'Event not found'
  if (event.creator != user) throw 'Invalid update'
  Object.assign(event, params)
  await event.save()
}

async function join(id, user) {
  const event = await Event.findById(id)
  if (!event) throw 'Event not found'
  if (!event.guests.includes(user)) {
    event.guests.push(user)
    event.save()
  }
}
async function unjoin(id, user) {
  const event = await Event.findById(id)
  if (!event) throw 'Event not found'
  let index = event.guests.indexOf(user)
  if (index > -1) {
    event.guests.splice(index, 1)
    event.save()
  }
}
async function _delete(id, user) {
  const event = await Event.findById(id)
  if (event.creator != user) throw 'Invalid deletion'
  await event.remove()
}
