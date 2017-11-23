import React from 'react';

import Slide from './slide';

const slidesData = [
  {
    id: 'first',
    slideUrl: '//www.slideshare.net/slideshow/embed_code/key/eV7KmxZvXKakwM',
    linkUrl: '//www.slideshare.net/afkatja/girl-code-talk-24th',
    linkTitle: 'Girl code talk June 24th 2015',
    text: 'WYSIWYG: Augmenting Content of Digital Books in Schooltas',
    authorUrl: '//www.slideshare.net/afkatja',
    authorText: 'Katja Hollaar',
  },
  {
    id: 'second',
    slideUrl: '//www.slideshare.net/slideshow/embed_code/key/eV7KmxZvXKakwM',
    linkUrl: '//www.slideshare.net/afkatja/girl-code-talk-24th',
    linkTitle: 'Building Light: The Architecture of Philips Hue by',
    text: 'Building Light: The Architecture of Philips Hue',
    authorUrl: '//slideshare.net/kriepy/',
    authorText: 'Kristin Rieping',
  },
  {
    id: 'third',
    dataId: '172c447cd744448f8ccd51f7160a067c',
    linkTitle: 'Girl Code talk June 24th 2015',
    text: 'Uncuncious bias',
    authorUrl: 'https://twitter.com/Lieke2208',
    authorText: 'Lieke Boon',
  },
  {
    id: 'fourth',
    slideUrl: '//www.slideshare.net/slideshow/embed_code/key/bgzBLaDYbqHBvc',
    text: 'A Board Game Night With Geeks',
    authorUrl: '//slideshare.net/Felienne',
    authorText: 'Felienne Hermans',
  },
  {
    id: 'fifth',
    dataId: '0dd6e09e644d46d8a7078bf258d4d981',
    linkTitle: 'Smashing Pixels with Imanee',
    text: 'Smashing Pixels with Imanee',
    authorUrl: '//slideshare.net/erikaheidi',
    authorText: 'Erika Reinaldo',
  },
  {
    id: 'sixth',
    slideUrl: '//www.slideshare.net/slideshow/embed_code/key/zur17cxFbRYQEa',
    text: 'Girl Code @ Nerds on Stage',
    authorText: 'Girl Code',
  },
  {
    id: 'seventh',
    slideUrl: 'https://drive.google.com/file/d/0B04GR_dBvRPWTjJBb01qREo5WDA/preview',
    text: 'Girl Code meets Meteor',
    authorText: 'Girl Code',
  },
  {
    id: 'eightth',
    slideUrl: '//www.slideshare.net/slideshow/embed_code/key/5FT3a5vFBL5yQa',
    text: 'Girl Code meets IOT',
    authorUrl: '//slideshare.net/inekescheffers',
    authorText: 'Ineke Scheffers',
  },
  {
    id: 'ninth',
    slideUrl: '//www.slideshare.net/slideshow/embed_code/key/2B09vQINeYqMQi',
    text: 'How neural networks can make a drone your next best friend',
    authorUrl: '//bluejayeindhoven.nl/',
    authorText: 'Tessie Hartjes and Iris Huijben (Blue Jay Eindhoven)',
  },
  {
    id: 'tenth',
    slideUrl: '//www.slideshare.net/slideshow/embed_code/key/eRBzlMXQsPAi0L',
    text: 'Hooli: Building a Connected Hoola Hoop',
    authorUrl: '//slideshare.net/afkatja',
    authorText: 'Katja Hollaar',
  },
  {
    id: 'eleventh',
    slideUrl: '//student.lessonup.io/lesson/gGnZZ9C5S9ft9RKyG',
    text: 'LoRa, IOT-projects and a poll',
    authorUrl: '//twitter.com/kriepy',
    authorText: 'Kristin Rieping',
  },
  {
    id: 'twelfth',
    slideUrl: '//www.slideshare.net/slideshow/embed_code/key/NmDyAITRBG5kEs',
    text: 'Building Rock-Paper-Scissors: Girl Code meets Ruby at Codaisseur',
    authorUrl: '//github.com/EsterKais',
    authorText: 'Ester Kais',
  },
  {
    id: '13th',
    slideUrl: '//www.slideshare.net/slideshow/embed_code/key/iGMLueyJUy5NSG',
    text: 'Challenges of being a Girl Coder: Girl Code meets Booking.com',
    authorText: 'TARA NIELSEN, Liana Popescu, Yosra Alaa, Abril Alvarez',
  },
  {
    id: '14th',
    slideUrl: '//www.slideshare.net/slideshow/embed_code/key/JRYIZl9zLNntPe',
    text: 'All about Front End - Girl Code @ ANWB',
    authorText: 'Xiaolin Song, Anne van den Berg, Hanny Verkerk, Chantal Sloep',
  },
];

export default function Slides() {
  return (
    <div className="page-container">
      <section>
        <h2>Here you can find slides of the talks that were given at our events</h2>
        <ul className="slides">
          {slidesData.map(slide => (
            <li key={slide.id}>
              {slide.slideUrl ?
                <Slide {...slide} />
              : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
