'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = newProjectHandler;
//import path from 'path';

function newProjectHandler(req, res, dbClient) {
  //res.sendFile(path.resolve('./server/public/new-project/index.html'));
  var path = req.params[0] ? req.params[0] : 'index.html';
  res.sendFile(path, { root: './server/public/new-project' });
}