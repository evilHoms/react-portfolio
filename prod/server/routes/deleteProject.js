"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteProjectHandler;

var _config = require("../../../config.json");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deleteProjectHandler(req, res, dbClient) {

  if (req.query.pass === _config2.default.pass) {
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
  } else {
    res.writeHead(403);
    res.write(JSON.stringify({ res: "ACCESS DENIED!!!" }));
    res.end();
  }
}