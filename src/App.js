import React, { Component } from 'react';
import logo from './images/logo-girlcode.png';
import MainNav from './mainnav';
import Welcome from './Welcome';
import Footer from './footer';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="site-container">
        <MainNav />
        <main className="App">
          <header className="home-header">
            <img src={logo} alt="GirlCode" className="logo" />
            <h1>Welcome to Girl Code</h1>
          </header>
          <div className="page-container">
            <Welcome />
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}
