import React from 'react'
import { FormattedMessage } from 'react-intl'
import NavBar from './NavBar'
import HeaderLink from './HeaderLink'
import messages from './messages'
import { assets } from '../../_helpers/assets'
import './header.css'

function logged() {
  return localStorage.getItem('user') !== null ? true : false
}

function Header() {
  return (
    <div className="d-flex align-items-center">
      <div className="bd-highlight justify-content-start ml-4 mr-2">
        <img
          src={assets('/images/logo.png')}
          alt="logo"
          className="img-responsive img-fluid"
          height="90"
          width="90"
        />
      </div>

      <div className="p-2 bd-highlight">
        <NavBar>
          {!logged() && (
            <div>
              <HeaderLink to="/login">
                <FormattedMessage {...messages.SignIn} />
              </HeaderLink>

              <HeaderLink to="/register">
                <FormattedMessage {...messages.SignUp} />
              </HeaderLink>
            </div>
          )}

          {logged() && (
            <div>
              <HeaderLink to="/">
                <FormattedMessage {...messages.home} />
              </HeaderLink>

              <HeaderLink to="/profile">
                <FormattedMessage {...messages.Profile} />
              </HeaderLink>

              <HeaderLink to="/create-event">
                <FormattedMessage {...messages.CreateEvent} />
              </HeaderLink>

              <HeaderLink to="/logout" className="logout">
                <FormattedMessage {...messages.LogOut} />
              </HeaderLink>
            </div>
          )}
        </NavBar>
      </div>
    </div>
  )
}

export default Header
