/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl'

export const scope = 'boilerplate.components.Footer'

export default defineMessages({
  message: {
    id: `${scope}.message`,
    defaultMessage: 'This is the Footer for EventFinder!!!',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author}.
    `,
  },
})
