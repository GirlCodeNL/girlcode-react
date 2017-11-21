import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import DefaultLayout from './Layout';
import TutorialLayout from './Tutorials';
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
        <DefaultLayout exact path="/" component={Home} />
        <DefaultLayout exact path="/about" component={About} />
        <DefaultLayout exact path="/events" component={Events} />
        <DefaultLayout exact path="/slides" component={Events} />
        <DefaultLayout exact path="/blog" component={Blog} />
        <TutorialLayout exact path="/tutorials/:tutorialName" component={TutorialPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
