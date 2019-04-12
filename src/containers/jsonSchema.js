export const request_transform_json_schema = {
  "type": "object",
  "properties": {
    "config": {
      "type": "object",
      "properties": {
        "add": {
          "type": "object",
          "properties": {
            "querystring": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": []
        },
      }
    },
    "description": "",
    "required": []
  }
};

export const json_data = {
  "config": {
    "add": {
      "querystring": "id=1",
      "headers": "sgcp=1",
      "body": "hell obody"
    },
  }
};
