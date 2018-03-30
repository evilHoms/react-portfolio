import config from '../../../config.json';

export default function addProjectHandler(req, res, dbClient) {
  console.log(req.body.name);
  if (req.body.pass === config.pass) {
    dbClient.connect(config.db.mongodbUrl, (err, client) => {
      const db = client.db(config.db.dbName);
      // Выбираем коллекцию
      const projects = db.collection(config.db.collections.projects);

      projects.findOne({name: req.body.name}, (err, result) => {
        if (err) throw err;

        if (result === null) {
          projects.insertOne(req.body, (err, result) => {
            res.writeHead(200, {
              "Access-Control-Allow-Origin": "*"
            });
            console.log(req.body);
            res.end(JSON.stringify(req.body));
            client.close();
          });
          console.log('add new project');
        }
        else {
          res.writeHead(200, {
            "Access-Control-Allow-Origin": "*"
          });
          res.end(JSON.stringify(result));
          client.close();
        }
      });
    });
  }
  else {
    res.writeHead(403, {
      "Access-Control-Allow-Origin": "*"
    });
    res.write(JSON.stringify({res: "ACCESS DENIED!!!"}));
    res.end()
  }
  
  
}