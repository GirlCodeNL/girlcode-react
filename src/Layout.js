import React from 'react';
import classNames from 'classnames';

import MainNav from './mainnav';
import Footer from './footer';

export default function DefaultLayout(props) {
  const { theme, children } = props;
  return (
    <div className={classNames('site-container', theme)}>
      <MainNav />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export const withLayout = Component => theme => props => <DefaultLayout theme={theme}><Component {...props} /></DefaultLayout>;
