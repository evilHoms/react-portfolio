'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _root = require('./routes/root.js');

var _root2 = _interopRequireDefault(_root);

var _getProjects = require('./routes/getProjects.js');

var _getProjects2 = _interopRequireDefault(_getProjects);

var _addProject = require('./routes/addProject.js');

var _addProject2 = _interopRequireDefault(_addProject);

var _sendMessage = require('./routes/sendMessage.js');

var _sendMessage2 = _interopRequireDefault(_sendMessage);

var _deleteProject = require('./routes/deleteProject.js');

var _deleteProject2 = _interopRequireDefault(_deleteProject);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paths = {
  root: '/',
  projects: '/projects',
  sendMsg: '/send_msg'
};

function routes(app, dbClient) {

  app.use(_bodyParser2.default.json());

  app.get(paths.projects, function (req, res) {
    (0, _getProjects2.default)(req, res, dbClient);
  });
  app.post(paths.sendMsg, function (req, res) {
    (0, _sendMessage2.default)(req, res);
  });
  app.post(paths.projects, function (req, res) {
    (0, _addProject2.default)(req, res, dbClient);
  });
  app.delete(paths.projects, function (req, res) {
    (0, _deleteProject2.default)(req, res, dbClient);
  });

  app.get('/*', function (req, res) {
    (0, _root2.default)(req, res, dbClient);
  });
};