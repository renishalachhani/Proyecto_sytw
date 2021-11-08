/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl'

export const scope = 'boilerplate.components.Header'

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },

  SignIn: {
    id: `${scope}.SignIn`,
    defaultMessage: 'Sign In',
  },

  LogOut: {
    id: `${scope}.LogOut`,
    defaultMessage: 'Log Out',
  },

  Profile: {
    id: `${scope}.Profile`,
    defaultMessage: 'Profile',
  },

  SignUp: {
    id: `${scope}.SignUp`,
    defaultMessage: 'Sign Up',
  },

  Category: {
    id: `${scope}.Category`,
    defaultMessage: 'Category',
  },

  CreateEvent: {
    id: `${scope}.CreateEvent`,
    defaultMessage: 'Create event',
  },
})
