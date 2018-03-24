'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import mongodb from 'mongodb';
//import config from '../../config.json';
// import routes from './routes.js';
// import path from 'path';

//const MongoClient = mongodb.MongoClient;
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || config.port || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || config.ip || '0.0.0.0';

var app = (0, _express2.default)();
// app.use("/public", express.static(path.resolve(__dirname, 'public')));
// app.get('/', function(req, res) {
//   res.send('hello');
// })
//routes(app, MongoClient);
app.listen(port, ip);