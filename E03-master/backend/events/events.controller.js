const express = require('express')
const router = express.Router()
const userService = require('./event.service')

// routes
router.get('/', index)
router.get('/:id', show)
router.get('/:id/join', join)
router.delete('/:id/unjoin', unjoin)
router.post('/new', creation)
router.put('/:id', update)
router.delete('/:id', _delete)

module.exports = router
function index(req, res, next) {
  userService
    .getAll()
    .then((events) => res.json(events))
    .catch((err) => next(err))
}
function show(req, res, next) {
  userService
    .getById(req.params.id)
    .then((event) => (event ? res.json(event) : res.sendStatus(404)))
    .catch((err) => next(err))
}
function creation(req, res, next) {
  userService
    .create(req.body, req.user.sub)
    .then(() => res.json({}))
    .catch((err) => next(err))
}
function update(req, res, next) {
  userService
    .update(req.params.id, req.body, req.user.sub)
    .then(() => res.json({}))
    .catch((err) => next(err))
}
function join(req, res, next) {
  userService
    .join(req.params.id, req.user.sub)
    .then(() => res.json({ id: req.user.sub }))
    .catch((err) => next(err))
}
function unjoin(req, res, next) {
  userService
    .unjoin(req.params.id, req.user.sub)
    .then(() => res.json({ id: req.user.sub }))
    .catch((err) => next(err))
}
function _delete(req, res, next) {
  userService
    .delete(req.params.id, req.user.sub)
    .then(() => res.json({}))
    .catch((err) => next(err))
}
