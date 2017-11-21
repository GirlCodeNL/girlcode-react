import React from 'react';

import Tutorial from './tutorial';

const markdownFiles = require.context('./', true, /\.md$/);

const TUTORIALS = [
  {
    name: 'tictactoe',
    title: 'Tic Tac Toe',
    steps: [
      {
        id: 'step1',
        content: markdownFiles('./tictactoe/step1.md'),
      },
    ],
  },
  {
    name: 'vision-api',
    title: 'Vision API',
    steps: [
      {
        id: 'step1',
        content: 'Vision API text content',
      },
    ],
  },
];

export default function TutorialPage(props) {
  const { tutorialName } = props.match.params;
  const tutorial = TUTORIALS.filter(t => console.log('tutorial page', t, tutorialName) || (tutorialName === t.name))[0];
  return (
    <article className="tutorials-page page-container">
      <Tutorial title={tutorial.name} steps={tutorial.steps} />
    </article>
  );
}
