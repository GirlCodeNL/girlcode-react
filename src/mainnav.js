/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavItem from './nav-item';
import logo from './images/logo-girlcode.png';

export default class MainNav extends Component {
  render() {
    const items = [
      {
        url: '/',
        title: 'Home',
        id: 'home',
      },
      {
        url: '/about',
        title: 'About',
        id: 'about',
      },
      {
        url: '/events',
        title: 'Events',
        id: 'events',
      },
      {
        url: '/tutorials',
        title: 'Tutorials',
        id: 'tutorials',
        subnav: [
          { title: 'Tictactoe', url: '/tutorials/tictactoe', id: 'tictactoe' },
          { title: 'Vision API', url: '/tutorials/vision-api', id: 'vision-api' },
        ],
      },
      {
        url: '/slides',
        title: 'Slides',
        id: 'slides',
      },
      {
        url: '/blog',
        title: 'Blog',
        id: 'blog',
      },
    ];
    return (
      <nav className="site-nav nav-wrapper">
        <Link to="/" className="logo-link"><img src={logo} alt="GirlCode" className="logo" /></Link>
        <ul>
          { items.map(item => (
            <NavItem key={`identifier${item.id}`} title={item.title} url={item.url} subnav={item.subnav} />
          ))}
        </ul>
      </nav>
    );
  }
}
