import rootHandler from './routes/root.js';
import getProjectsHandler from './routes/getProjects.js';
import newProjectHandler from './routes/newProject.js';
import addProjectHandler from './routes/addProject.js';
import sendMessageHandler from './routes/sendMessage.js';
import deleteProjectHandler from './routes/deleteProject.js';
import bodyParser from 'body-parser';


const paths = {
  root: '/',
  projects: '/projects',
  newProject: '/new_project',
  sendMsg: '/send_msg'
}

export default function routes(app, dbClient) {

  app.use(bodyParser.json());

  app.get(paths.projects, (req, res)    => {getProjectsHandler(req, res, dbClient)});
  app.post(paths.sendMsg, (req, res)    => {sendMessageHandler(req, res)});
  app.post(paths.projects, (req, res)   => {addProjectHandler(req, res, dbClient)});
  app.delete(paths.projects, (req, res) => {deleteProjectHandler(req, res, dbClient)});

  app.get('/*', (req, res) => {rootHandler(req, res, dbClient)});

};