const Joi = require("@hapi/joi");
const dotEnv = require("dotenv-flow");
dotEnv.config();

const schema = Joi.object({
  TWILIO_ACCOUNT_SID: Joi.string().required(),
  TWILIO_AUTH_TOKEN: Joi.string().required()
});

const envVars = {
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN
};

const validateEnv = () => {
  const { error } = schema.validate(envVars, {
    abortEarly: false,
    convert: false
  });
  if (error) throw error;
};

module.exports = { validateEnv, envVars };
