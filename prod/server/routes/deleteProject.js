'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteProjectHandler;

var _config = require('../../../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deleteProjectHandler(req, res, dbClient) {

  dbClient.connect(_config2.default.db.mongodbUrl, function (err, client) {
    var db = client.db(_config2.default.db.dbName);
    var projects = db.collection(_config2.default.db.collections.projects);
    projects.deleteOne({ name: req.query.name }, function (err, result) {
      if (err) throw err;

      res.writeHead(200);
      res.end(JSON.stringify(result));
      client.close();
    });
  });
}