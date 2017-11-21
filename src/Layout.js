import React from 'react';
import { Route } from 'react-router-dom';
import classNames from 'classnames';

import MainNav from './mainnav';
import Footer from './footer';

const DefaultLayout = ({ component: Component, ...rest }) => console.log(rest) || (
  <Route
    {...rest}
    render={matchProps => (
      <div className={classNames('site-container', rest.theme)}>
        <MainNav />
        <main>
          <Component {...matchProps} />
        </main>
        <Footer />
      </div>
    )}
  />
);

export default DefaultLayout;
