import React from 'react';

import DefaultLayout from './Layout';

const TutorialLayout = ({ component: Component, ...rest }) => (
  <DefaultLayout
    theme="dark-theme"
    {...rest}
    component={matchProps => (
      <div className="page-container">
        <Component {...matchProps} />
      </div>
    )}
  />
);

export default TutorialLayout;
