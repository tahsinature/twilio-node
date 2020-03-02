const sdk = require("twilio");
const { envVars } = require("./envManager");

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = envVars;

const client = sdk(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

module.exports = client;
