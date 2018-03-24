'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProjectsHandler;

var _config = require('../../../config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getProjectsHandler(req, res, dbClient) {
  var dbUrl = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL || _config2.default.db.mongodbUrl;
  dbClient.connect(dbUrl, function (err, client) {
    var db = client.db(_config2.default.db.dbName);
    var projects = db.collection(_config2.default.db.collections.projects);

    var data = projects.find().toArray(function (err, result) {
      if (err) throw err;

      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(result));
      client.close();
    });
  });
}