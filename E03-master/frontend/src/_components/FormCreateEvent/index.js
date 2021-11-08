import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { eventActions } from '../../_actions'
import Form from 'react-bootstrap/Form'
import './styles.css'
import '../../styles.css'

class FormCreateEvent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      event: {
        eventName: '',
        beginDate: '',
        endDate: '',
        description: '',
        location: '',
        imageUrl: '',
      },
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    const { event } = this.state
    this.setState({
      event: {
        ...event,
        [name]: value,
      },
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ submitted: true })
    const { event } = this.state
    if (
      event.eventName &&
      event.beginDate &&
      event.description &&
      event.location
    ) {
      this.props.create(event)
    }
  }

  render() {
    const { creating } = this.props
    const { event, submitted } = this.state

    return (
      <div className="centrar_event">
        <div className="col-md-6 col-md-offset-3">
          <h2>Create Event</h2>
          <hr></hr>
          <form name="form" onSubmit={this.handleSubmit}>
            <div
              className={
                'form-group' +
                (submitted && !event.eventName ? ' has-error' : '')
              }
            >
              <label htmlFor="eventName">Event name</label>
              <input
                type="text"
                className="form-control"
                name="eventName"
                value={event.eventName}
                onChange={this.handleChange}
              />
              {submitted && !event.eventName && (
                <div className="help-block">Event name is required</div>
              )}
            </div>

            <div
              className={
                'form-group' +
                (submitted && !event.location ? ' has-error' : '')
              }
            >
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                name="location"
                value={event.location}
                onChange={this.handleChange}
              />
              {submitted && !event.location && (
                <div className="help-block">Location is required</div>
              )}
            </div>

            <div
              className={
                'form-group' +
                (submitted && !event.description ? ' has-error' : '')
              }
            >
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={event.description}
                onChange={this.handleChange}
              />
              {submitted && !event.description && (
                <div className="help-block">A description is required</div>
              )}
            </div>

            <div
              className={
                'form-group' +
                (submitted && !event.beginDate ? ' has-error' : '')
              }
            >
              <label htmlFor="beginDate">Start date</label>
              <input
                type="date"
                className="form-control"
                name="beginDate"
                value={event.beginDate}
                onChange={this.handleChange}
              />
              {submitted && !event.beginDate && (
                <div className="help-block">Begin date is required</div>
              )}
            </div>

            <div
              className={
                'form-group' + (submitted && !event.endDate ? ' has-error' : '')
              }
            >
              <label htmlFor="endDate">End date</label>
              <input
                type="date"
                className="form-control"
                name="endDate"
                value={event.endDate}
                onChange={this.handleChange}
              />
            </div>

            <div
              className={
                'form-group' +
                (submitted && !event.imageUrl ? ' has-error' : '')
              }
            >
              <Form.File id="formcheck-api-regular">
                <Form.File.Label>Picture</Form.File.Label>
                <Form.File.Input
                  type="file"
                  id="upload_file"
                  className="form-control border-0 bg-transparent"
                  name="imageUrl"
                  value={event.imageUrl}
                  onChange={this.handleChange}
                />
              </Form.File>
              {/* <label htmlFor="imageUrl">Picture</label>
              <input
                type="file"
                id="upload_file"
                className="form-control"
                name="imageUrl"
                value={event.imageUrl}
                onChange={this.handleChange}
              /> */}
            </div>

            <br />

            <div className="form-group">
              <button className="btn btn-primary">Create</button>
              {creating && (
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              )}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapState(state) {
  const { creating } = state.eventInformation
  return { creating }
}

const actionCreators = {
  create: eventActions.create,
}

const connectedCreateEventPage = connect(
  mapState,
  actionCreators
)(FormCreateEvent)
export { connectedCreateEventPage as FormCreateEvent }
