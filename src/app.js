const { messages } = require("./twilio");

messages
  .create({ body: "test msg", to: "+6281290539936", from: "+12015847382" })
  .then(d => {
    console.log(d);
  })
  .catch(err => {
    console.log(err);
  });
