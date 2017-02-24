import React, { Component } from 'react';
import NavItem from './nav-item';
import logo from './images/logo-girlcode.png';

export default class MainNav extends Component {
  render() {
    const items = [
      { url : '/',
      title: 'Home',},
      { url : '/about',
      title: 'About',},
      { url : '/events',
      title: 'Events',},
      { url : '/tutorials',
      title: 'Tutorials',},
      { url : '/slides',
      title: 'Slides',},
      { url : '/blog',
      title: 'Blog',},
    ];
    return (
      <nav className="site-nav nav-wrapper">
        <img src={logo} alt="GirlCode" className="logo" />
        <ul>
          { items.map((item, i) => <NavItem key={`identifier${i}`} title={item.title} url={item.url} />) }
        </ul>
      </nav>
    );
  }
};
