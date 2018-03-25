'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootHandler;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _app = require('../../modules/App/app.js');

var _app2 = _interopRequireDefault(_app);

var _config = require('../../../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || _config2.default.port;
var ip = process.env.IP || _config2.default.ip;

var staticPath = _config2.default.production ? 'https://' + ip + '/public' : _config2.default.host + ':8080';
console.log('static path: ' + staticPath);

function rootHandler(req, res, dbClient) {
  if (!_config2.default.production) {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*'
    });
  }
  var appComponent = _server2.default.renderToString(_react2.default.createElement(_app2.default, null));
  res.end(renderHTML(appComponent));
}

function renderHTML(component) {
  return '\n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Web Developer Portfolio</title>\n    <link href="https://fonts.googleapis.com/css?family=Comfortaa|Kurale|Open+Sans" rel="stylesheet">\n    <link href="' + staticPath + '/main.css" rel="stylesheet">\n    <script src="https://use.fontawesome.com/8d4a8c389f.js"></script>\n  </head>\n  <body>\n    \n    <div id="root">' + component + '</div>\n  \n  </body>\n  <script type="text/javascript" src="' + staticPath + '/bundle.js"></script>\n  </html>';
}