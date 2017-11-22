import React from 'react';

import DefaultLayout from './Layout';

const TutorialLayout = ({ ...rest }) => (
  <DefaultLayout
    theme="dark-theme"
    {...rest}
  >
    <div className="page-container">
      {rest.children}
    </div>
  </DefaultLayout>
);
export default TutorialLayout;

export const withTutorialLayout = Component => props => <TutorialLayout><Component {...props} /></TutorialLayout>;
