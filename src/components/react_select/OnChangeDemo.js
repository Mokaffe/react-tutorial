//https://react-select.com/advanced#action-meta

import React, { Component } from 'react';
import Select from 'react-select';
import {colourOptions} from "./data";

class OnChangeDemo extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = (inputValue, { action }) => {
    console.log('inputValue', inputValue);
    console.log('action', action);
    switch (action) {
      case 'input-change':
        this.setState({ inputValue });
        return;
      case 'menu-close':
        console.log(this.state.inputValue);
        let menuIsOpen = undefined;
        if (this.state.inputValue) {
          menuIsOpen = true;
        }
        this.setState({
          menuIsOpen
        });
        return;
      default:
        return;
    }
  };

  render () {
    const { inputValue, menuIsOpen } = this.state;
    return (
      <Select
        isMulti
        defaultValue={colourOptions[0]}
        isClearable
        isSearchable
        inputValue={inputValue}
        onInputChange={this.onInputChange}
        name="color"
        options={colourOptions}
        menuIsOpen={menuIsOpen}
      />
    );
  }
}

export default OnChangeDemo;
