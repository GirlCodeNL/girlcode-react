import React, { Component } from 'react';
import Person from './person';

const persons = [
  {
    name: 'Ineke',
    img: require('../public/ineke.gif'),
    content: '<p>Ineke is the founder of Girl Code. With a Masters in New Media and a background in Gender Studies, she has always been fascinated by both code and equality. With Girl Code she can combine both.</p><p>Because she doesn\'t only wants to write about tech and code anymore, but build it herself, she put her money where her mouth is and started the Full-Stack Web Development with JavaScript course by NYCDA at BSSA in September 2016.</p>',
    quote: 'I think the world of code is unnecessarily divided. And because I feel knowing how to code gives you superpowers, I think more women should be learning and doing it.',
    quoteSrc: 'https://inekescheffers.com'
  },
  {
    name: 'Katja',
    img: require('../public/katja.gif'),
    content: '<p>Katja is a web developer who made a shift from studying and teaching human languages. That\'s why she believes there is a huge gender gap in the programming field. She feels this must be bridged by inspiring more women to join this profession.</p><p>By giving talks, organizing events, and mentoring others, Katja hopes to raise awareness of the often unsconsious predisposition of women not to choose a living in this male-dominated industry.</p>',
    quote: 'It must become less obvious that girls choose the humanities over mathematics, and vice versa.',
    quoteSrc: 'https://netherlands.girlsintech.org/2015/07/08/junes-girl-of-the-month-katja-hollaar/'
  },
  {
    name: 'Kristin',
    img: require('../public/kristin.gif'),
    content: '<p>Kristin studied Mathematics and Artificial Intelligence at the University of Twente and the University of Amsterdam. She is passionate about coding, because it enables her to create everything she can possibly think of. And she thinks of a lot!</p><p>In the meantime it has become her personal mission to close the gender gap in the world of code as a whole. Kristin is a back-end developer at <a href="//q42.com">Q42</a>.</p>',
    quote: 'I\'ve always been and felt like one of the guys. But in reality it turned out there was still a too big of a difference. I noticed that being one of the then only three women at the office programming. That was my reason to organize Girl Code.',
    quoteSrc: 'Kristin self' },
];

export default class AboutPersons extends Component {

  render() {
    return (
      <article className="about">
        { persons.map((person, i) => <Person key={`identifier${i}`} title={person.title} img={person.img} content={person.content} quote={person.quote} quoteSrc={person.quoteSrc} />) }
      </article>
    );
  }
}
