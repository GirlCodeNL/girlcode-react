import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Tutorials extends Component {
  render() {
    return (
      <div className="page-container">
        <section>
          <h2>Tutorials</h2>
          <p>Here you can find the tutorials for the workshops we host during our meetups, including slides and demos.</p>
          <ul>
            <li><Link to="/tutorials/tictactoe-tutorial">Tictactoe game with meteor.js</Link></li>
            <li><Link to="/tutorials/vision-api-tutorial">Vision API basics</Link></li>
          </ul>
        </section>
        {this.props.children}
      </div>
    );
  }
}
