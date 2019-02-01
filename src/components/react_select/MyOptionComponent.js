import React from 'react';
import { components } from 'react-select';

const style = {
  item: {
    // width: '441px',
    height: '50px',
    fontSize: '16px',
    padding: '0 0 12px 12px',
  },
  name: {
    color: '#333',
    // height: '22px',
  },
  email: {
    color: '#808285',
    // height: '22px',
  }
};

const { Option } = components;

export const MyOptionComponent = (props) => {
  console.log('props',props);

  const { data } = props;
  const name = data.label.split('<')[0];
  const email = data.label.split('<')[1].split('>')[0];

  return (
    <Option {...props}>
      <div style={style.item}>
        <div style={style.name}>{name}</div>
        <div style={style.email}>{email}</div>
      </div>
    </Option>
  );
};

export const NoOptionsMessage = (props) => {
  return (
    <components.NoOptionsMessage {...props} children={"no result found"}/>
  );
};
