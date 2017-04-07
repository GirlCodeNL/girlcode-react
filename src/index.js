import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import App, { withLayout as withBaseLayout } from './App';
import Home from './Home';
import About from './About';
import Events from './Events';
import Tutorials from './Tutorials';
import TutorialPage from './tutorials/TutorialPage';

import './index.scss';

export default class Layout extends React.Component {
  render(){
    return(
      <App />
    );
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={withBaseLayout(Home)} />
    <Route path='about' component={withBaseLayout(About)} />
    <Route path='events' component={withBaseLayout(Events)} />
    <Route path='tutorials' component={withBaseLayout(Tutorials, 'dark-theme')} />
    <Route path='tutorials/:tutorialName' component={withBaseLayout(TutorialPage, 'dark-theme')} />
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
