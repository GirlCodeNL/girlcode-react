import React from 'react';
import Tutorial from './tutorial';

const TUTORIALS = [
  {
    name: 'tictactoe',
    title: 'Tic Tac Toe',
    steps: [
      { type: 'text', content: 'Text content' },
      { type: 'code', content: 'Code content' }
    ],
  },
  {
    name: 'vision-api',
    title: 'Vision API',
    steps: [
      { type: 'text', content: 'Vision API text content' },
      { type: 'code', content: 'Vision API code content' }
    ],
  },
];

export default class TutorialPage extends React.Component {
  render() {
    return (
      <article className="tutorial-page">
        { TUTORIALS.map((tutorial, i) => <Tutorial key={`tutorial-${i}`} title={tutorial.title} steps={tutorial.steps} />) }
      </article>
    );
  }
}
