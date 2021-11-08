import React from 'react'
import { connect } from 'react-redux'
import { userActions } from '../../_actions'

import '../../styles.css'

class EditProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      createdDate: '',
      user: '',
      changeUser: {
        firstName: '',
        lastName: '',
        username: '',
        oldPassword: '',
        password: '',
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getUsers()
  }

  handleChange(event) {
    const { name, value } = event.target
    const { changeUser } = this.state
    this.setState({
      changeUser: {
        ...changeUser,
        [name]: value,
      },
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    /*         this.setState({ submitted: true })
     */ const { changeUser } = this.state
    const { user } = this.props

    for (let clave in changeUser)
      if (changeUser[clave] == '') delete changeUser[clave]

    console.log(changeUser)

    Object.assign(user,changeUser)

    this.props.update(user)
  }

  render() {
    const { user } = this.props
    const { changeUser } = this.state

    return (
      <div className="w-100 ml-5">
        <div className="centrar w-50">
          <div className="col-md-8 col-md-offset-3">
            <h2 className="mb-2">Edit profile information</h2>

            <form name="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="Username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={changeUser.username}
                  onChange={this.handleChange}
                  placeholder={user.username}
                />
              </div>

              <div className="form-group">
                <label htmlFor="First Name">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={changeUser.firstName}
                  onChange={this.handleChange}
                  className="form-control"
                  id="firstname"
                  placeholder={user.firstName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Last Name">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={changeUser.lastName}
                  onChange={this.handleChange}
                  className="form-control"
                  id="lastname"
                  placeholder={user.lastName}
                />
              </div>

              <h4 className="mt-3 mb-2"> Change password </h4>

              <div className="form-group">
                <label htmlFor="OldPassword">Old password</label>
                <input
                  type="text"
                  name="oldPassword"
                  value={changeUser.oldPassword}
                  onChange={this.handleChange}
                  className="form-control"
                  id="OldPassword"
                />
              </div>

              <div className="form-group">
                <label htmlFor="NewPassword">New password</label>
                <input
                  type="text"
                  name="password"
                  value={changeUser.password}
                  onChange={this.handleChange}
                  className="form-control"
                  id="NewPassword"
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary"> Save </button>
              </div>
            </form>
          </div>
        </div>
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
  update: userActions.update,
}

const connectedEditProfile = connect(mapState, actionCreators)(EditProfile)
export default connectedEditProfile
