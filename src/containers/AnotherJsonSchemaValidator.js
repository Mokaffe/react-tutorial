import React, {Component} from 'react';
import {json_data, request_transform_json_schema} from "./jsonSchema";

const Ajv = require('ajv');


class AnotherJsonSchemaValidator extends Component {
  state = {
    jsonString: null,
  };

  handleOnChangeTextArea = (e) => {
    const {value} = e.target;
    this.setState(
      {
        jsonString: value,
      }
    );
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const {jsonString} = this.state;
    const schema = request_transform_json_schema;
    const data=json_data;

    const ajv = new Ajv();
    // ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
    const validate = ajv.compile(schema);

    const valid = validate(data);

    console.log('valid => ', valid);
    if (!valid) {
      console.log('error => ', validate.errors);
    }
  };
  //{foo: 'abc', bar: 2}
  //{"foo": "abc", "bar": 2}

  render() {
    const {jsonString} = this.state;
    const josnStringFormat = jsonString ? JSON.stringify(jsonString, null, 2) : '';
    return (
      <div>
        <form>
          <button onClick={this.handleSubmit}>Submit</button>
          <br/>
          <textarea rows={20} cols={100} onChange={this.handleOnChangeTextArea}/>
        </form>
        <code>{josnStringFormat}</code>
      </div>
    );
  }
}

export default AnotherJsonSchemaValidator;

