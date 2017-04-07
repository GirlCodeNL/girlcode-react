import React, { Component } from 'react';
import MainNav from './mainnav';
import Footer from './footer';
import './App.scss';

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={`site-container ${this.props.theme}`}>
        <MainNav />
        <main className="App">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export const withLayout = (Component, classname) => () => <App theme={classname}><Component /></App>;
