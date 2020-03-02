const { messages } = require("./twilio");
const { TWILIO_PHONE_NUMBER } = require("./envManager").envVars;

messages
  .create({ body: "test msg", to: "+6281290539936", from: TWILIO_PHONE_NUMBER })
  .then(d => {
    console.log(d);
  })
  .catch(err => {
    console.log(err);
  });
