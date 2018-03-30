"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addProjectHandler;

var _config = require("../../../config.json");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addProjectHandler(req, res, dbClient) {
  console.log(req.body.name);
  if (req.body.pass === _config2.default.pass) {
    dbClient.connect(_config2.default.db.mongodbUrl, function (err, client) {
      var db = client.db(_config2.default.db.dbName);
      // Выбираем коллекцию
      var projects = db.collection(_config2.default.db.collections.projects);

      projects.findOne({ name: req.body.name }, function (err, result) {
        if (err) throw err;

        if (result === null) {
          projects.insertOne(req.body, function (err, result) {
            res.writeHead(200, {
              "Access-Control-Allow-Origin": "*"
            });
            console.log(req.body);
            res.end(JSON.stringify(req.body));
            client.close();
          });
          console.log('add new project');
        } else {
          res.writeHead(200, {
            "Access-Control-Allow-Origin": "*"
          });
          res.end(JSON.stringify(result));
          client.close();
        }
      });
    });
  } else {
    res.writeHead(403, {
      "Access-Control-Allow-Origin": "*"
    });
    res.write(JSON.stringify({ res: "ACCESS DENIED!!!" }));
    res.end();
  }
}