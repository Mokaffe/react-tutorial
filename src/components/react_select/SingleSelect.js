import React from 'react';
import Select from 'react-select';

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
  }),
  control: (provided, state) => {
    console.log('provided for control', provided);
    return {
      // none of react-select's styles are passed to <Control />
      ...provided,
      width: 600,
    };
  },
  singleValue: (provided, state) => {
    console.log('provided signvalue = ', provided);
    return {
      ...provided,
      border: '1px solid yellow',
      // position 和 transform 可以将单选后输入框的光标移到选中值的后面
      position: 'relative',
      transform: 'inherit',
    };
  },
  input: (provided, state) => {
    return {
      border: '1px solid red',
    };
  }
};

class SingleSelect extends React.Component {
  render() {
    return (
      <Select
        styles={customStyles}
        options={options}
        classNamePrefix={'mokaffe'}
        isClearable
      />
    );
  }
}

export default SingleSelect;

