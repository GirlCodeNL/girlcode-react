import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { withLayout } from './Layout';
import { withTutorialLayout } from './Tutorials';
import Home from './Home';
import About from './About';
import Events from './Events';
import TutorialPage from './tutorials/TutorialPage';
import Blog from './Blog';

import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={matchProps => withLayout(Home)('')(matchProps)} />
        <Route exact path="/about" render={matchProps => withLayout(About)('')(matchProps)} />
        <Route exact path="/events" render={matchProps => withLayout(Events)('')(matchProps)} />
        <Route exact path="/slides" render={matchProps => withLayout(Events)('')(matchProps)} />
        <Route exact path="/blog" render={matchProps => withLayout(Blog)('')(matchProps)} />
        <Route exact path="/tutorials/:tutorialName" render={matchProps => withTutorialLayout(TutorialPage)(matchProps)} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
