import config from '../../../config.json';

export default function getProjectsHandler(req, res, dbClient) {
  const dbUrl = config.db.mongodbUrl;
  dbClient.connect(dbUrl, (err, client) => {
    const db = client.db(config.db.dbName);
    const projects = db.collection(config.db.collections.projects);

    const data = projects.find().toArray((err, result) => {
      console.log(result);
      if (err) throw err;
      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(result));
      client.close();
    });
  });
}