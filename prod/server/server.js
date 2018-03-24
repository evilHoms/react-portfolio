'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _config = require('../../config.json');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoClient = _mongodb2.default.MongoClient;
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || _config2.default.port;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || _config2.default.ip;

var app = (0, _express2.default)();
app.use("/public", _express2.default.static(_path2.default.resolve(__dirname, 'public')));
(0, _routes2.default)(app, MongoClient);
var server = app.listen(port, ip);