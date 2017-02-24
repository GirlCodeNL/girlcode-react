import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import App, { withLayout as withBaseLayout } from './App';
import Home from './Home';
import About from './About';
import Events from './Events';
import Tutorials from './Tutorials';
import Tutorial from './tutorials/tutorial';
import VisionApiTutorial from './tutorials/vision-api-tutorial';

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
    <Route path='about' component={About} />
    <Route path='events' component={Events} />
    <Route path='tutorials' component={Tutorials} />
    <Route path='tutorials/:tutorialName' component={Tutorial} />
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
