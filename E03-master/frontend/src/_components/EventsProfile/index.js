import React from 'react'
import { eventActions } from '../../_actions'
import { userActions } from '../../_actions'
import { connect } from 'react-redux'

class EventsProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      eventos: undefined,
    }
  }
  componentDidMount() {
    this.props.getEvents()
    this.props.getUsers()
  }

  componentWillMount() {
    let eventos
    if (this.props.events.event.events == 'undefined') {
      eventos = this.props
    } else {
      eventos = this.props.events.event.events
    }
    this.setState({ eventos })
  }

  render() {
    const eventos = this.state.eventos
    const { user } = this.props

    return (
      <div className="w-75 ml-5">
        <h1 className="mb-3"> Events </h1>
        <ul className="list-group overflow-auto" style={{ maxHeight: '450px' }}>
          {eventos
            .filter(
              (event) =>
                event.guests.includes(user._id) || event.creator == user._id
            )
            .map((event, index) => (
              <li
                className="border border-info rounded mw-50 mb-3 list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                {' '}
                {event.eventName}
                <span className="badge badge-info badge-pill">
                  {event.guests.length}
                </span>
              </li>
            ))}
          {eventos.filter(
            (event) =>
              event.guests.includes(user._id) || event.creator == user._id
          ) == 0 && <p>No event has been logged or created yet</p>}
        </ul>
      </div>
    )
  }
}

function mapState(state) {
  const { events } = state
  const { user } = state.authentication
  return { user, events }
}

const actionCreators = {
  getEvents: eventActions.getAll,
  getUsers: userActions.getAll,
}

const connectedEventsProfile = connect(mapState, actionCreators)(EventsProfile)
export default connectedEventsProfile
