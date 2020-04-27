const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const makeANiceEmail = (text) =>
  `<div className="email" style="color: white; background: rgb(245, 119, 78); border: 1px solid black; 
    padding: 20px; font-family: sans-serif; line-height: 2; font-size: 20px;">
    <img src="https://res.cloudinary.com/dnqhdklcw/image/upload/v1587573580/sickfits/sick-fits-logo_mcdgs9.png"/>
    <h2>Hello There!</h2>
    <p>${text}</p>
    <p>😘, Valentin Ageev</p>
  </div>
  `;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;
