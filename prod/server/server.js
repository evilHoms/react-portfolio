'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import routes from './routes.js';
// import path from 'path';

//const MongoClient = mongodb.MongoClient;
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || _config2.default.port || 8080;
//import mongodb from 'mongodb';

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || _config2.default.ip || '0.0.0.0';

var app = (0, _express2.default)();
// app.use("/public", express.static(path.resolve(__dirname, 'public')));
// app.get('/', function(req, res) {
//   res.send('hello');
// })
//routes(app, MongoClient);
app.listen(port, ip);