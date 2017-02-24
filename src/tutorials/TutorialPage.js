import React, {PropTypes} from 'react';
import Tutorial from './tutorial';

const TUTORIALS = [
  {
    name: 'tictactoe',
    title: 'Tic Tac Toe',
    steps: [
      { type: 'text', content: '' },
      { type: 'code', content: '' }
    ],
  },
];

export default class TutorialPage extends React.Component {
  render() {
    return (
      <Tutorial
        title={tut.title}
        steps={tut.steps}
      />
    );
  }
}
