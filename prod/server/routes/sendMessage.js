'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendMessageHandler;

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendMessageHandler(req, res) {
  console.log(req.body);
  // Sending email
  var transporter = _nodemailer2.default.createTransport({
    service: 'gmail',
    auth: {
      user: 'saik.fsk@gmail.com',
      pass: 'MadDog1905'
    }
  });

  var mailOpts = {
    from: 'saik.fsk@gmail.com',
    to: 'homspage.work@gmail.com',
    subject: 'Portfolio, new comment!',
    text: req.body.text
  };

  transporter.sendMail(mailOpts, function (error, info) {
    if (error) throw error;else console.log('Email sent ' + info.response);
  });

  res.send();
}