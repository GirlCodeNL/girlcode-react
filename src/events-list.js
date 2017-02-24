import React, { Component } from 'react';
import Event from './event';

const events = [
  {
    img: require('./images/meetups/firstmeetup.jpeg'),
    title: "The first meetup, June 2015",
    description: "An inspiring night with talks and demos from four professional Girl Coders, a talk by Lieke Boon, and a very enthusiastic attendance by all sorts of Girl Coders from Girls in Tech's and our own network.",
  },
  {
    img: require('./images/meetups/girlcodenerdsstage.jpeg'),
    title: "Girl Code at Nerds on Stage, December 2015",
    description: "Nerds on Stage, a yearly tech event for Dutch high school students, describes itself as 'A place to meet the brightest minds in technology and creativity'. So when we were asked to give two mini lectures there, we simply couldn't refuse. And we're glad we didn't, because we had a blast!",
  },
  {
    img: require('./images/meetups/girlcodemeetsmeteor.png'),
    title: "Girl Code meets Meteor, February 2016",
    description: "To shake things up a bit we organized a hands-on coding meetup instead of just talks. During Girl Code meets Meteor everyone built their own version of Tic Tac Toe in the good company of other Girl Coders and Meteor tutors.",
  },
  {
    img: require('./images/meetups/girlcodemeteorrerun.jpeg'),
    title: "Girl Code meets meteor Rerun, March 2016",
    description: "A rerun like on tv and as good as any good old Friends rerun. We wanted to offer a second chance to attend this meetup at our Amsterdam office. 50(!) of you did. So the world has gained 50 extra special awesome games of Tic Tac Toe. Wow!",
  },
  {
    img: require('./images/meetups/girlcodegirlsday.jpeg'),
    title: "Girl Code meets Girlsday, April 2016",
    description: "Unconscious bias is formed very early in our lives, so we took part in the annual Girlsday organized by VHTO. The idea is to show schoolgirls that tech professions are not necessarily only for boys. Girls coded with Scratch and showed enormous creativity and enjoyed programming! In their feedback, most of them said they expected our profession to be very boring and it turned out to be completely the opposite!",
  },
  {
    img: require('./images/meetups/girlcodenightnerds.jpeg'),
    title: "Girl Code at Night of the Nerds, May 2016",
    description: "Girl Code was invited to Night of the Nerds 2016 to tell about our cause and show some cool demos. Ineke and Kristin were at this event, showcased our Connected Hula Hoop and gave a tech talk. Night of the Nerds is an event to get kids inspired about tech professions such as programming.",
  },
  {
    img: require('./images/meetups/girlcodevisionapi.jpg'),
    title: "Girl Code meets Google Vision API, June 2016",
    description: "Google was in Amsterdam with GCP Next World Tour, so we hijacked Girl Googler Sara Robinson! We organized an introduction to the API, a hands-on Vision API workshop and concluded with a brainstorm to inspire everyone to get started with the API. The result of the brainstorm session seemed to be that we have to do something with Tinder and the Vision API…",
  },
  {
    img: require('./images/meetups/girlcodeiot.jpg'),
    title: "GirlCode meets Internet of Things, August 2016",
    description: "IoT has become increasingly ubiquitous in our daily lives. It makes our lives easier and offers fun opportunities for us coders. Beyond coding apps and websites, you can bring your coding into the real world even more when you do something with IoT. For this meetup, we arranged for cool talks and demos on IoT and IoT-projects.",
  },
  {
    img: require('./images/meetups/nycda.jpg'),
    title: "Girl Code meets NYCDA at Duck Shooter Game, December 2016",
    description: 'After some changes in professional and personal lives of the founders that caused an unusual break in Girl Code activity, we were back with a Javascript workshop in collaboration with <a href="https://nycda.com/amsterdam">New York Code and Design Academy in Amsterdam</a>. Tutored by Girl Coders and Academy students and graduates, we built a ducky shooter game from scratch with html, css and Javascript.',
  },
];

export default class EventsList extends Component {

  render() {
    return (
      <ul className="horizontal gallery">
        {
          events.map((event, i) => <Event key={`event-${i}`} title={event.title} img={event.img} description={event.description} />)
        }
      </ul>
    );
  }
}
