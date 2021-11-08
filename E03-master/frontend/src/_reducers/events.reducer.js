import { eventConstants } from '../_constants'

let event = JSON.parse(localStorage.getItem('events'))
const initialState = event ? { event } : {}

export function events(state = initialState, action) {
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

    default:
      return state
  }
}
