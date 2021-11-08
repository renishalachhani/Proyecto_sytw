import { eventConstants } from '../_constants'

let event = JSON.parse(localStorage.getItem('event'))
const initialState = event ? { selected: true, event } : {}

export function eventInformation(state = initialState, action) {
  switch (action.type) {
    case eventConstants.GETINFORMATION_REQUEST:
      return {
        selected: false,
        event: action.event,
      }
    case eventConstants.GETINFORMATION_SUCCESS:
      return {
        selected: true,
        event: action.event,
      }
    case eventConstants.GETINFORMATION_FAILURE:
      return {}
    case eventConstants.JOIN_SUCCESS: {
      let newEvent = state.event
      newEvent.guests.push(action.id.id)
      return {
        event: newEvent,
      }
    }
    case eventConstants.UNJOIN_SUCCESS: {
      let unjoinEvent = state.event
      let toDelete = unjoinEvent.guests.indexOf(action.id.id)
      if (toDelete > -1) unjoinEvent.guests.splice(toDelete, 1)
      return {
        event: unjoinEvent,
      }
    }
    default:
      return state
  }
}
