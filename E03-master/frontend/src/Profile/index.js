import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBView } from 'mdbreact'
import { userActions } from '../_actions'
import { connect } from 'react-redux'

import ProfileData from '../_components/ProfileData'
import EditProfile from '../_components/EditProfile'
import EventsProfile from '../_components/EventsProfile'

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      component: '',
    }

    this.userData = this.userData.bind(this)
    this.editProfile = this.editProfile.bind(this)
    this.events = this.events.bind(this)
  }
  componentDidMount() {
    this.props.getUsers()
  }

  userData() {
    this.setState({ component: 'datauser' })
  }

  editProfile() {
    this.setState({ component: 'editprofile' })
  }

  events() {
    this.setState({ component: 'events' })
  }

  render() {
    const component = this.state.component

    return (
      <div className="d-flex flex-row mt-5">
        <MDBCol md="4">
          <MDBCard narrow>
            <MDBView cascade>
              <MDBCardImage
                hover
                overlay="white-slight"
                className="card-img-top"
                src="/images/ImgProfile.jpg"
                alt="Profile image"
              />
            </MDBView>

            <MDBCardBody>
              <div className="d-flex flex-row justify-content-center alig-items-center">
                <div
                  className="btn-group-vertical w-100"
                  role="group"
                  aria-label="Vertical button group"
                >
                  <button
                    onClick={this.userData}
                    type="button"
                    className="btn btn-outline-dark rounded mb-2"
                  >
                    User information
                  </button>
                  <button
                    onClick={this.editProfile}
                    type="button"
                    className="btn btn-outline-dark rounded mb-2"
                  >
                    Edit information
                  </button>
                  <button
                    onClick={this.events}
                    type="button"
                    className="btn btn-outline-dark rounded mb-2"
                  >
                    Events
                  </button>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {component == 'datauser' && <ProfileData />}
        {component == 'editprofile' && <EditProfile />}
        {component == 'events' && <EventsProfile />}
      </div>
    )
  }
}

function mapState(state) {
  const { users, authentication } = state
  const { user } = authentication
  return { user, users }
}

const actionCreators = {
  getUsers: userActions.getAll,
}

const connectedProfile = connect(mapState, actionCreators)(Profile)
export { connectedProfile as Profile }
