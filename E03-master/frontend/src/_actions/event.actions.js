import { eventConstants } from '../_constants'
import { eventService } from '../_services'
import { history } from '../_helpers'
import { alertActions } from './alert.actions'

export const eventActions = {
  create,
  edit,
  getAll,
  getInformation,
  delete: _delete,
  join,
  unjoin,
}

function create(event) {
  return (dispatch) => {
    dispatch(request(event))

    eventService.create(event).then(
      (event) => {
        dispatch(success(event))
        history.push('/')
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(event) {
    return { type: eventConstants.CREATE_REQUEST, event }
  }
  function success(event) {
    return { type: eventConstants.CREATE_SUCCESS, event }
  }
  function failure(error) {
    return { type: eventConstants.CREATE_FAILURE, error }
  }
}
function edit(event) {
  return (dispatch) => {
    dispatch(request(event))
    eventService.update(event).then(
      (event) => {
        dispatch(success(event))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(event) {
    return { type: eventConstants.EDIT_REQUEST, event }
  }
  function success(event) {
    return { type: eventConstants.EDIT_SUCCESS, event }
  }
  function failure(error) {
    return { type: eventConstants.EDIT_FAILURE, error }
  }
}
function getAll() {
  return (dispatch) => {
    dispatch(request())
    eventService.getAll().then(
      (events) => {
        dispatch(success(events))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request() {
    return { type: eventConstants.GETALL_REQUEST }
  }
  function success(events) {
    return { type: eventConstants.GETALL_SUCCESS, events }
  }
  function failure(error) {
    return { type: eventConstants.GETALL_FAILURE, error }
  }
}
function getInformation(id) {
  return (dispatch) => {
    if (id == -1) return
    dispatch(request({ id }))
    eventService.getById(id).then(
      (events) => {
        dispatch(success(events))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: eventConstants.GETINFORMATION_REQUEST, id }
  }
  function success(event) {
    return { type: eventConstants.GETINFORMATION_SUCCESS, event }
  }
  function failure(error) {
    return { type: eventConstants.GETINFORMATION_FAILURE, error }
  }
}
function _delete(id) {
  return (dispatch) => {
    dispatch(request({ id }))
    eventService.delete(id).then(
      (id) => {
        dispatch(success(id))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: eventConstants.DELETE_REQUEST, id }
  }
  function success(id) {
    return { type: eventConstants.DELETE_SUCCESS, id }
  }
  function failure(error) {
    return { type: eventConstants.DELETE_FAILURE, error }
  }
}
function join(id) {
  return (dispatch) => {
    dispatch(request(id))
    eventService.join(id).then(
      (id) => {
        dispatch(success(id))
        dispatch(alertActions.success('Joined succesfully to the event'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: eventConstants.JOIN_REQUEST, id }
  }
  function success(id) {
    return { type: eventConstants.JOIN_SUCCESS, id }
  }
  function failure(error) {
    return { type: eventConstants.JOIN_FAILURE, error }
  }
}
function unjoin(id) {
  return (dispatch) => {
    dispatch(request(id))
    eventService.unjoin(id).then(
      (id) => {
        dispatch(success(id))
        dispatch(alertActions.success('Unjoined succesfully to the event'))
      },
      (error) => {
        dispatch(failure(error.toString()))
        dispatch(alertActions.error(error.toString()))
      }
    )
  }

  function request(id) {
    return { type: eventConstants.UNJOIN_REQUEST, id }
  }
  function success(id) {
    return { type: eventConstants.UNJOIN_SUCCESS, id }
  }
  function failure(error) {
    return { type: eventConstants.UNJOIN_FAILURE, error }
  }
}
