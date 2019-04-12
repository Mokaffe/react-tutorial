import React, {Component} from 'react';

const Joi = require('joi');

class JoiValidation extends Component {

  render() {

    const schema_request_transfor = Joi.object().keys({
      config: Joi.object().keys({
        http_method: Joi.string(),
        remove: Joi.object().keys({
          body: Joi.array(),
          headers: Joi.array(),
          querystring: Joi.array(),
        }),
        rename: Joi.object().keys({
          body: Joi.array(),
          headers: Joi.array(),
          querystring: Joi.array(),
        }),
        replace: Joi.object().keys({
          body: Joi.array(),
          headers: Joi.array(),
          querystring: Joi.array(),
        }),
        add: Joi.object().keys({
          body: Joi.array(),
          headers: Joi.array(),
          querystring: Joi.array(),
        }),
        append: Joi.object().keys({
          body: Joi.array(),
          headers: Joi.array(),
          querystring: Joi.array(),
        }),
      }),
    });


    const data = {
      "config": {
        "remove": {
          "querystring": [],
          "headers": [],
          "body": "ssss"
        },
        "replace": {
          "querystring": [],
          "headers": [],
          "body": []
        },
        "http_method": "ssss",
        "add": {
          "querystring": [],
          "headers": [],
          "body": []
        },
        "append": {
          "querystring": [],
          "headers": [],
          "body": []
        },
        "rename": {
          "querystring": [],
          "headers": [],
          "body": []
        }
      },
    };

    const result = Joi.validate(data, schema_request_transfor);
    console.log(result);
    return (
      <div>
        aaas
      </div>
    );
  }
}

export default JoiValidation;
