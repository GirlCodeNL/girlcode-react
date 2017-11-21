import React from 'react';
import EventsList from './events-list';

export default function Events() {
  return (
    <div className="page-container">
      <section>
        <h2>What we do</h2>
        <p>{'Since our start in June 2015, we\u2019ve organized various events, from meetups with talks and demos to hands-on workshops to giving lessons to schoolgirls.'}</p>
        <p>We try to organize events as often possible, ideally every 2-3 months.</p>
        <p>Below you can see an overview of our past activities.</p>
        <EventsList />
      </section>
    </div>
  );
}
