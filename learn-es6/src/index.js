import React from 'react';
import ReactDOM from 'react-dom';
// import Hello from './hello'
import {ClickComponent, InputComponent} from './ClickComponent'
import * as serviceWorker from './serviceWorker';


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


ReactDOM.render(
    <div>
        <ClickComponent></ClickComponent>
        <br></br>
        <br></br>
        <InputComponent></InputComponent>
        <Button label="Save"/>
    </div>, 
    document.getElementById('root'));

serviceWorker.unregister();