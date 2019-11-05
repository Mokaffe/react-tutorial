import React from 'react';
import Select from 'react-select';

const style = {
  fieldKey: {
    display: 'grid',
    gridTemplateColumns: '10% 10% 25% 55%',
    gridTemplateRows: '50px 50px 50px 50px', // row 要根据values的总和计算，如果是： 2 + 2 = 4
  },
  remove: {
    gridRow: '1 / 3', // rows = 4, 那么这个就是 1 / (4 + 1)
  },
  header: {
    gridRow: '1 / 3',   //
  },
  keyValue: {},
};

const config = {
  "remove": {
    "querystring": [],
    "headers": [],
    "body": []
  },
  "replace": {
    "querystring": [],
    "headers": [],
    "body": []
  },
  "add": {
    "querystring": [],
    "headers": [],
    "body": []
  },
  "append": {
    "querystring": [],
    "headers": [],
    "body": []
  }
}

const data = [
  {
    type: 'remove',
    data: [
      {
        fieldName: 'headers',
        values: ["reh1", "req2:v1"],
      },
    ]
  },
  {
    type: 'add',
    data: [
      {
        fieldName: 'body',
        values: ["bodyv1:bodyV2", "boyyyy:value"],
      },
    ]
  },
];


class Test extends React.Component {

  handleRequestTransformer(type,operationObj) {

    const obj = {};
    obj.type=type;
    obj.data = [];

    if(operationObj.headers.length !== 0){
      obj.data.push({
        fieldName: 'headers',
        values: operationObj.headers
      })
    }
    if(operationObj.body.length !== 0){
      obj.data.push({
        fieldName: 'body',
        values: operationObj.body
      })

    }
    if(operationObj.querystring.length !== 0){
      obj.data.push({
        fieldName: 'querystring',
        values: operationObj.querystring
      })
    }

    console.log(obj.data.length)

    return obj.data.length === 0 ? null: obj;
  }


  render() {
    const pluginInfo = [
      this.handleRequestTransformer('remove',config.remove),
      this.handleRequestTransformer('replace' ,config.replace),
      this.handleRequestTransformer('add',config.add),
      this.handleRequestTransformer('append',config.append),
    ];


    const aa = pluginInfo.filter(item=>{
      return item;
    });




    console.log(pluginInfo);
    console.log(aa)

    const test = "aa";
    const value = test.substr(test.indexOf(':')+1);

    console.log(value,'==value')



    return (
      <div style={style.fieldKey}>
        <div style={style.remove}>Remove</div>
        <div style={style.header}>Headers</div>
        <div style={style.keyValue}>key1</div>
        <div style={style.keyValue}>value1</div>
        <div style={style.keyValue}>key2</div>
        <div style={style.keyValue}>value2</div>
        <a href={"#ss"}>sssssssssssssssssssss</a>

      </div>
    );
  }
}


const Tmp = (props) => {
  const {type, fieldName, values} = props;
  return (
    <div>

    </div>
  );
};

export default Test;

