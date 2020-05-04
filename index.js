const fs = require('fs');


fs.appendFileSync('data.txt', 'Hello NodeJS - first string');
fs.appendFileSync('data.txt', '\n Hello againe - second string');

let data = fs.readFileSync('data.txt');
console.log(data.toString());

const nodemailer = require('nodemailer'); 

let transporter = nodemailer.createTransport({
    'service': 'gmail',
    'auth': {
      'user': 'corsair835@gmail.com',
      'pass': 'chotirizirochkichtobnevidnobyloparol',
    },
  });

  const mailOptions = {
    'from': 'corsair835@gmail.com',
    'to': 'corsair835@gmail.com',
    'subject': 'NodeJS to email',
    'html': '<p>Test text to check</p>',
  };

transporter.sendMail(mailOptions, function (error, info) {
if (error) {
    console.error(error);
} else {
    console.log(info);
}
});