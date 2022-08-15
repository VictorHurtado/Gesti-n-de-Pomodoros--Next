import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import Ajv from 'ajv';
const loginSchema = {
    title: 'Login',
    type: 'object',
    properties: {
        username: {
            
            description: 'username',
            type: 'string',
            minimum: 5,
            maximum: 20,
           
        },
        password: {
            description: 'password of the user',
            type: 'string',
            minimum: 0,
            maximum: 16,
        },

    },
    required: ['username', 'password'],
};
const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}
const schemaValidator = createValidator(loginSchema);

export const bridge = new JSONSchemaBridge(loginSchema, schemaValidator);