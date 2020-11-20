var nodemailer = require('nodemailer');

const ADRESS = '';  //insert mail adress here (gmail as of transporter settings)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: ADRESS,
    pass: '',   // insert pw here 
  }
});

const send = (sendToMondMondPeep, electedMondMondPeep) => {
  transporter.sendMail(
      {
          from: ADRESS,
          to: sendToMondMondPeep.email,
          subject: `HoHoHoHola ${sendToMondMondPeep.name} Your MondMond-Wichtel-Partner is ......`,
          text: 
`Santas last will was for you to gift your MondMond-Friendo: 

${electedMondMondPeep.name}.

-----------------------

This boi can be found at:

${electedMondMondPeep.adress}

-----------------------

Merry Motherfucking Christmas....
`,
      }, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
  });
}

module.exports = {
    send,
}
