import React from 'react'

class HelloMessage extends React.component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    )
  }
}

export {HelloMessage};