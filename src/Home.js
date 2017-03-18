import React, {Component} from 'react';
import logo from './images/logo-girlcode.png';
import Welcome from './Welcome';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className="home-header">
          <img src={logo} alt="GirlCode" className="logo" />
          <h1>Welcome to Girl Code</h1>
        </header>
        <div className="page-container">
          <Welcome />
        </div>
      </div>
    );
  }
}
