import React from 'react';
import ReactDom from 'react-dom/server';
import {BrowserRouter} from 'react-router-dom';
import App from '../../modules/App/app.js';

export default function rootHandler(req, res, dbClient) {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  });
  const appComponent = ReactDom.renderToString(<App />);
  res.end(renderHTML(appComponent));
}

function renderHTML(component) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Web Developer Portfolio</title>
    <link href="https://fonts.googleapis.com/css?family=Comfortaa|Kurale|Open+Sans" rel="stylesheet">
    <link href="http://localhost:8080/main.css" rel="stylesheet">
    <script src="https://use.fontawesome.com/8d4a8c389f.js"></script>
  </head>
  <body>
    
    <div id="root">${component}</div>
  
  </body>
  <script type="text/javascript" src="http://localhost:8080/bundle.js"></script>
  </html>`;
}