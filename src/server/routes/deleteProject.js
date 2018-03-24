import config from '../../../config.json';

export default function deleteProjectHandler(req, res, dbClient) {

  if (req.query.pass === config.pass) {
    dbClient.connect(config.db.mongodbUrl, (err, client) => {
      const db = client.db(config.db.dbName);
      const projects = db.collection(config.db.collections.projects);
      projects.deleteOne({name: req.query.name}, (err, result) => {
        if (err) throw err;
        res.writeHead(200);
        res.end(JSON.stringify(result));
        client.close();
      });
    });
  }
  else {
    res.writeHead(403);
    res.write(JSON.stringify({res: "ACCESS DENIED!!!"}));
    res.end()
  }
}