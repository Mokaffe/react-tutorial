import React from 'react'
import Select from 'react-select';
import {MyOptionComponent, NoOptionsMessage} from './MyOptionComponent'
import userInfoOptions from "./UserInfo";

const style = {
  select: {
    container: (provided) => ({
      ...provided,
      width: 470,
      height: 40
    }),
    control: (provided) => ({
      ...provided,
      width: 470,
      height: 38,
      fontSize: 14,
      '&:hover': {borderColor: 'none'},
      border: '1px solid lightgray',
      boxShadow: 'none',
    }),
    input: (provided) => ({
      '&:focus': {backgroundColor: 'red'}
    }),
    indicatorSeparator: () => ({
      display: 'none'
    }),
    dropdownIndicator: () => ({
      display: 'none'
    }),
    clearIndicator: () => ({
      display: 'none'
    }),
    option: (styles, {isFocused, isDisabled, isSelected}) => ({
      ...styles,
      fontWeight: isFocused ? 'bold' : null,
      backgroundColor: isSelected ? 'white' : null,
      border: '1px solid, yellow',
    }),
  },
}


class CustomiseOption extends React.Component {

  render() {
    return (
      <div>
        <Select
          styles={style.select}
          options={userInfoOptions}
          components={{
            Option: MyOptionComponent,
            NoOptionsMessage
          }}
          isMulti
          isClearable={true}
          defaultMenuIsOpen={true}
          maxMenuHeight={500}
          placeholder="select user here..."
        />
      </div>
    );
  }
}

export default CustomiseOption;
