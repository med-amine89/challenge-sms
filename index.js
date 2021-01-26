require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12673824210',
     to: '+21622182135'
   })
  .then(message => console.log(message.sid));
