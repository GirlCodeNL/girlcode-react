import React from 'react';
import Tutorial from './tutorial';

const TUTORIALS = [
  {
    name: 'tictactoe',
    title: 'Tic Tac Toe',
    steps: [
      {
        id: 'step1',
        content: `<h1>Welcome to Girl Code meets Meteor workshop!</h1>
        <p class="flow-text">On this page, we'll explain how to get ready for the workshop.</p>
        <h2>Installation</h2>
        <h3>Windows</h3>
        <p>Download the official <a href="https://install.meteor.com/windows">Meteor installer</a></p>

        <h3>OS X or Linux</h3>

        <p>Install the latest official Meteor release from your terminal:</p>
        <code>curl https://install.meteor.com/ | sh</code>

        <p>Once Meteor is installed, run the following code in your Terminal (for Mac or Linux users) or the command prompt (for Windows users):</p>

        <pre class=" line-numbers language-javascript" data-line="1-2, 4, 5"><code class=" language-javascript">mkdir Projects
          cd Projects
          meteor create tictactoe<span class="line-numbers-rows"><span></span><span></span><span></span></span></code><div class=" line-highlight">

          </div><div class=" line-highlight">
          </div><div class=" line-highlight">
          </div></pre>

        <p>Then, run the project from your terminal / command prompt:</p>

        <pre class=" line-numbers language-javascript" data-line="1-2, 4, 5"><code class=" language-javascript">cd tictactoe
          meteor<span class="line-numbers-rows"><span></span><span></span></span></code><div class=" line-highlight">

          </div><div class=" line-highlight">
          </div><div class=" line-highlight">
          </div></pre>

        <p>You can test the app at <a href="http://localhost:3000">http://localhost:3000</a> with your browser. Please use Google Chrome. The rest of the tutorial assumes that you are using Chrome as browser.</p>

        <p>Now, open <a href="https://atom.io/">Atom</a> where you can edit your project. On Windows, right-click in the /tictactoe folder and choose <code>Open with Atom</code>. Otherwise, you can launch Atom and go to File -&gt; Open and choose <code>/projects/tictactoe</code> directory.</p>
      </div>`},
    ],
  },
  {
    name: 'vision-api',
    title: 'Vision API',
    steps: [
        { content: 'Vision API text content' },
      ]
  },
];

export default class TutorialPage extends React.Component {
  render() {
    const { tutorialName } = this.props.params;
    const tutorial = TUTORIALS.filter((t) => console.log(t, tutorialName) || (tutorialName === t.name))[0];
    console.log(tutorial);
    return (
      <article className="tutorials-page">
        <Tutorial title={tutorial.name} steps={tutorial.steps} />
      </article>
    );
  }
}
