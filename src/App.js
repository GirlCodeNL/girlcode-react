import React, { Component } from 'react';
import MainNav from './mainnav';
import Footer from './footer';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="site-container">
        <MainNav />
        <main className="App">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
