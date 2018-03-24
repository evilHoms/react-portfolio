import express from 'express';
//import mongodb from 'mongodb';
//import config from '../../config.json';
// import routes from './routes.js';
// import path from 'path';

//const MongoClient = mongodb.MongoClient;
const port     = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || config.port || 8080;
const ip       = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || config.ip || '0.0.0.0';

const app = express();
// app.use("/public", express.static(path.resolve(__dirname, 'public')));
// app.get('/', function(req, res) {
//   res.send('hello');
// })
//routes(app, MongoClient);
app.listen(port, ip);