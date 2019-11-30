const accountSid = 'ACc32a10cbeff3a72ad14e2a097c8efbef';
const authToken = '63aee9d717ee3731b8b1caf3a7664a51';
const client = require('twilio')(accountSid, authToken);
client.messages
  .create({
     body: JSON.stringify({
	"phone" : "03361579789",
	"message" : "You'r otp-code for easy-carry account is 1234."
	}),
     from: '+14322871218',
     to: '+923449657228'
   })
  .then(message => console.log(message.sid))
  .catch(err => console.log(err));