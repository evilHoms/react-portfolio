import React from 'react';
import './app.scss';
import Loader from '../Loader/Loader.js';
import PortfolioPage from '../PortfolioPage/PortfolioPage.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage.js';
import AddProjectPage from '../AddProjectPage/AddProjectPage.js';
import { setTimeout } from 'timers';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // STAGES в первом состоянии отображается только лоадер, во втором появляется главная страница
    this.STAGES = ['loading', 'stable'];

    this.state = {
      stage: this.STAGES[0],
    }

    this.routes = (
      <Switch>
        <Route path="/add-project" component={AddProjectPage} />
        <Route path="/" component={PortfolioPage} />
      </Switch>
    );
  }

  componentDidMount() {
    // Здесь определяем, когда можно показывать главную страницу (попробовать сделать по загрузке всех ресурсов)
    setTimeout(() => this.setState({
      stage: this.STAGES[1]
    }),1500);
  }

  render() {
    const mainPage = this.state.stage === this.STAGES[1] ? this.routes : null;
    const hideLoader = this.state.stage === this.STAGES[1] ? true : false;

    return (
      <main className='app'>
        <Loader hide={hideLoader} />
        {mainPage}
      </main>
    );
  }
}