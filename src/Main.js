import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withLayout as withBaseLayout } from './App';
import Home from './Home';
import About from './About';
import Events from './Events';
import Tutorials from './Tutorials';
import TutorialPage from './tutorials/TutorialPage';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={withBaseLayout(Home)} />
      <Route exact path="about" component={withBaseLayout(About)} />
      <Route exact path="events" component={withBaseLayout(Events)} />
      <Route exact path="tutorials" component={withBaseLayout(Tutorials, 'dark-theme')} />
      <Route path="tutorials/:tutorialName" component={withBaseLayout(TutorialPage, 'dark-theme')} />
    </Switch>
  );
}

export default Main;
