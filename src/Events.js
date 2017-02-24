import React, { Component } from 'react';
import App from './App';
import EventsList from './events-list';

export default class Events extends Component {
  render() {
    return (
      <App>
        <div className="page-container">
          <section>
            <h2>What we do</h2>
            <p>Since our start in June 2015, we've organized various events, from meetups with talks and demos to hands-on workshops to giving lessons to schoolgirls.</p>
            <p>We try to organize events as often possible, ideally every 2-3 months.</p>
            <p>Below you can see an overview of our past activities.</p>
            <EventsList />
          </section>
        </div>
      </App>
    );
  }
}
