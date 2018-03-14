import express from 'express';
import mongodb from 'mongodb';
import config from '../../config.json';
import routes from './routes.js';
import path from 'path';

const MongoClient = mongodb.MongoClient;

const app = express();
app.use("/public", express.static(path.resolve(__dirname, 'public')));
routes(app, MongoClient);

const server = app.listen(config.port, onServerStart);

function onServerStart(e) {
  console.log('started on port:' + config.port);
}