import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  font-size: 18px;
  color: black;

  &:active {
    background: transparent;
    color: transparent;
  }
`
