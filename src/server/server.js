import express from 'express';
import mongodb from 'mongodb';
import favicon from 'serve-favicon';
import config from '../../config.json';
import routes from './routes.js';
import path from 'path';

const MongoClient = mongodb.MongoClient;
const port = process.env.PORT || config.port || 8080;

const app = express();
app.use("/public", express.static(path.resolve(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
routes(app, MongoClient);
app.listen(port);