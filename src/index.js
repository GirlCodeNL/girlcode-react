import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import './index.scss';

export default class Layout extends React.Component {
  render(){
    return(
      <App />
    );
  }
}

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='about' component={About} />
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
