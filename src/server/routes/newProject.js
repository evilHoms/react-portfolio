//import path from 'path';

export default function newProjectHandler(req, res, dbClient) {
  //res.sendFile(path.resolve('./server/public/new-project/index.html'));
  const path = req.params[0] ? req.params[0] : 'index.html';
  res.sendFile(path, {root: './server/public/new-project'});
}