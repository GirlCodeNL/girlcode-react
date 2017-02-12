import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import App from './App';
import './index.scss';

export default class Layout extends React.Component {
  render(){
    return(
      <App />
    );
  }
}

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={App} />
  </Route>
);

ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
);
