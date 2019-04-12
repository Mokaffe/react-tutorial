import React, {Component} from "react";
import Form from "react-jsonschema-form";

const schema = {
  title: "Request Transform",
  type: "object",
  required: [],
  properties: {
    // id: {type: "string", title: "id", default: ""},
    // name: {type: "string", title: "name", default: ""},
    // service: {type: "string", title: "service", default: ""},
    // enabled: {type: "string", title: "enabled", default: ""},
    // run_on: {type: "string", title: "run_on", default: ""},
    // consumer: {type: "string", title: "consumer", default: ""},
    // route: {type: "string", title: "route", default: ""},
    config: {
      title: "config",
      type: "object",
      required: [],
      properties: {
        remove: {
          title: "remove",
          type: "object",
          required: [],
          properties: {
            querystring: { type:"string", title: "querystring", default:""},
            headers: { type:"string", title: "headers", default:""},
            body: { type:"string", title: "body", default:""},
          }
        },
        replace: {
          title: "replace",
          type: "object",
          required: [],
          properties: {
            querystring: { type:"string", title: "querystring", default:""},
            headers: { type:"string", title: "headers", default:""},
            body: { type:"string", title: "body", default:""},
          }
        },
        add: {
          title: "add",
          type: "object",
          required: [],
          properties: {
            querystring: { type:"string", title: "querystring", default:""},
            headers: { type:"string", title: "headers", default:""},
            body: { type:"string", title: "body", default:""},
          }
        },
        append: {
          title: "append",
          type: "object",
          required: [],
          properties: {
            querystring: { type:"string", title: "querystring", default:""},
            headers: { type:"string", title: "headers", default:""},
            body: { type:"string", title: "body", default:""},
          }
        },
        rename: {
          title: "rename",
          type: "object",
          required: [],
          properties: {
            querystring: { type:"string", title: "querystring", default:""},
            headers: { type:"string", title: "headers", default:""},
            body: { type:"string", title: "body", default:""},
          }
        },
        http_method: {type: "string", title: "http_method"},
      }
    }
  }
};

const formData = {
  // title: "=",
  // done: true
};


class ReactJsonSchemaForm extends Component {
  render() {
    const log = (type) => console.log.bind(console, type);
    return (
      <div>
        <Form schema={schema}
              formData={formData}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")}/>
      </div>
    );
  }
}

export default ReactJsonSchemaForm;
