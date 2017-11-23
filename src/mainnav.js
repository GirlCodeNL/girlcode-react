/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import NavItem from './nav-item';
import logo from './images/logo-girlcode.png';

export default class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
    };
    this.onScroll = () => {
      const $mainNav = document.querySelector('.js-nav');
      if (!$mainNav) return;

      const topHeight = $mainNav.offsetHeight;
      if ($mainNav.classList.contains('mobile-nav-open')) {
        return;
      }
      const scrollPos = document.documentElement.scrollTop || window.scrollY;
      this.setState({ sticky: scrollPos > topHeight });
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => this.onScroll());
  }
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
      <nav className={classNames('site-nav nav-wrapper js-nav', { 'sticky-nav': this.state.sticky })}>
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
