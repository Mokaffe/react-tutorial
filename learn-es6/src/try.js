import React from 'react';


class Button extends React.Component {
    clickCounter = 0;
  
    handleClick = () => {
      console.log(`Clicked: ${++this.clickCounter}`);
    };
  
    render() {
      return (
        <button id={this.id} onClick={this.handleClick}>
          {this.props.label}
        </button>
      );
    }
  }
  
  // 使用
  ReactDOM.render(<Button label="Save" />, mountNode);