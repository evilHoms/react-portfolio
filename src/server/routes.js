import rootHandler from './routes/root.js';
import getProjectsHandler from './routes/getProjects.js';
import newProjectHandler from './routes/newProject.js';
import addProjectHandler from './routes/addProject.js';
import deleteProjectHandler from './routes/deleteProject.js';
import bodyParser from 'body-parser';


const paths = {
  root: '/',
  projects: '/projects',
  newProject: '/new_project'
}

export default function routes(app, dbClient) {

  app.use(bodyParser.json());

  //app.get(paths.root, (req, res)        => {rootHandler(req, res, dbClient)});
  app.get(paths.projects, (req, res)    => {getProjectsHandler(req, res, dbClient)});
  //app.get(paths.newProject, (req, res)  => {newProjectHandler(req, res, dbClient)});
  app.post(paths.projects, (req, res)   => {addProjectHandler(req, res, dbClient)});
  app.delete(paths.projects, (req, res) => {deleteProjectHandler(req, res, dbClient)});

  app.get('/*', (req, res) => {rootHandler(req, res, dbClient)});

  // app.all('/*', (req, res) => {
  //   res.sendFile(__dirname + '/public/404.html');
  // });

};