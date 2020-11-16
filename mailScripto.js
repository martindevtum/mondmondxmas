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
          subject: `Hey ${sendToMondMondPeep.name} Your Wichtel mondmondpeep is ......`,
          text: `Santas last will was for you to gift your mondmondpeepboiii:\n     ${electedMondMondPeep.name}.\nThis boi can be found at:\n     ${electedMondMondPeep.adress}`,
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
