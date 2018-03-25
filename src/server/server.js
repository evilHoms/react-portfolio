import express from 'express';
import mongodb from 'mongodb';
import config from '../../config.json';
import routes from './routes.js';
import path from 'path';

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || config.port || 8080;

const app = express();
app.use("/public", express.static(path.resolve(__dirname, 'public')));
routes(app, MongoClient);
app.listen(port);