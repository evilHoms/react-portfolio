import nodemailer from 'nodemailer';

export default function sendMessageHandler(req, res) {
  console.log(req.body);
  // Sending email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'saik.fsk@gmail.com',
      pass: 'MadDog1905'
    }
  });

  const mailOpts = {
    from: 'saik.fsk@gmail.com',
    to: 'homspage.work@gmail.com',
    subject: 'Portfolio, new comment!',
    text: req.body.text
  }

  transporter.sendMail(mailOpts, (error, info) => {
    if (error) throw error;
    else console.log(`Email sent ${info.response}`);
  });

  res.send();
}