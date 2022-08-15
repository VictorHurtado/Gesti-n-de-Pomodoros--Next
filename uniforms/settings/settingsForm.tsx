import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import Ajv from 'ajv';
const settingsSchema = {
    title: 'Settings',
    type: 'object',
    properties: {
        Pomodoro: {
            
            description: 'Work time configurate',
            type: 'integer',
            minimum: 0,
            maximum: 60,
           
        },
        DescansoCorto: {
            description: 'Short Break time configurate',
            type: 'integer',
            minimum: 0,
            maximum: 60,
        },

        DescansoLargo: {
            description: 'Long Break time configurate',
            type: 'integer',
            minimum: 0,
            maximum: 60,
        },
    },
    required: ['Pomodoro', 'DescansoCorto','DescansoLargo'],
};
const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}
const schemaValidator = createValidator(settingsSchema);

export const bridge = new JSONSchemaBridge(settingsSchema, schemaValidator);