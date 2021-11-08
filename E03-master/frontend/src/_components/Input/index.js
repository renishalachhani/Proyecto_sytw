import React from 'react'

export default class Input extends React.Component {
  render() {
    return (
      <div>
        <input
          data-testid="input"
          name={this.props.name}
          ref={this.props.ref}
          type={this.props.type}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}
