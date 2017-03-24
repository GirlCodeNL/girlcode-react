import React, { Component } from 'react';
import NavItem from './nav-item';
import { Link } from 'react-router';
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
      title: 'Tutorials',
      subnav: [
        {title: 'Tictactoe', url: '/tutorials/tictactoe-tutorial'},
        {title: 'Vision API', url: '/tutorials/vision-api-tutorial'},
      ]
      },
      { url : '/slides',
      title: 'Slides',},
      { url : '/blog',
      title: 'Blog',},
    ];
    return (
      <nav className="site-nav nav-wrapper">
        <Link to="/" className="logo-link"><img src={logo} alt="GirlCode" className="logo" /></Link>
        <ul>
          { items.map((item, i) => <NavItem key={`identifier${i}`} title={item.title} url={item.url} subnav={item.subnav} />) }
        </ul>
      </nav>
    );
  }
};
