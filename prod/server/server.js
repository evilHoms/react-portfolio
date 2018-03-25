'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _config = require('../../config.json');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoClient = _mongodb2.default.MongoClient;
var port = process.env.PORT || _config2.default.port || 8080;

var app = (0, _express2.default)();
app.use("/public", _express2.default.static(_path2.default.resolve(__dirname, 'public')));
app.use((0, _serveFavicon2.default)(_path2.default.join(__dirname, 'public', 'favicon.ico')));
(0, _routes2.default)(app, MongoClient);
app.listen(port);