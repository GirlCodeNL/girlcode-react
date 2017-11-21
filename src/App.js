import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import DefaultLayout from './Layout';
import Home from './Home';
import About from './About';
import Events from './Events';
import Tutorials from './Tutorials';
import TutorialPage from './tutorials/TutorialPage';

import './App.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout exact path="/" component={Home} />
        <DefaultLayout exact path="/about" component={About} />
        <DefaultLayout exact path="/events" component={Events} />
        <DefaultLayout exact path="/tutorials" render={matchProps => <Tutorials theme="dark-theme" {...matchProps} />} />
        <DefaultLayout path="/tutorials/:tutorialName" render={matchProps => <TutorialPage theme="dark-theme" {...matchProps} />} />
      </Switch>
    </BrowserRouter>
  );
}
