var nodemailer = require('nodemailer');

const ADRESS = '';  //insert mail adress here 

const transporter = nodemailer.createTransport({
  pool: true,
  maxConnections: 1,
  host: 'mail.gmx.net',
  port: 587,
  secure: false,
  auth: {
    user: ADRESS,
    pass: 'insert_pw_here'
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
};

module.exports = {
    send,
};
