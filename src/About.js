import React from 'react';
import AboutPersons from './about-persons';

export default function About() {
  return (
    <div className="page-container">
      <section>
        <h2>Who is Girl Code</h2>
        <p>We are an initiative started at <a href="//q42.com">Q42</a> back in 2015. Girl Code is an initiative to inspire girls of all ages to get into code. We also aim to raise awareness of the gender gap in tech. We think the world of software engineering can only benefit from having more women on board and creating a more diverse field. We are: <a href="#ineke">Ineke</a>, <a href="#katja">Katja</a> and <a href="#kristin">Kristin</a>.</p>
      </section>
      <section>
        <AboutPersons />
      </section>
    </div>
  );
}
