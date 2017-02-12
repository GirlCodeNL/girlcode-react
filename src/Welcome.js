import React, { Component } from 'react';
import SocialLink from './social-link';

const socialLinks = [
  { title: 'meetup', url: 'https://www.meetup.com/girlcode/', img: require('../public/button_meetup.png') },
  { title: 'twitter', url: 'https://twitter.com/GirlCodeNL', img: require('../public/button_twitter.png') },
  { title: 'facebook', url: 'https://www.facebook.com/GirlCodeNL/', img: require('../public/button_facebook.png') },
];

export default class Welcome extends Component {
  render() {
    return (
      <div className="content">
        <blockquote className="markedup floating"  cite="http://www.ncwit.org/resources/women-it-facts-infographic-2015-update">Women aged 25-34 are reporting <strong>greater dissatisfaction</strong> with their carreer prospects. These women cite <strong>unsupportive work environments</strong>, a lack of inspiring role models, and sacrifices in their personal lives that outweigh personal gains.</blockquote>
        <p>Girl Code is an initiative started at <a href="q42.com">Q42</a> in 2015. Now Girl Code is an independent community to inspire girls of all ages to get into code or stay into code. We also aim to raise awareness of the gender gap in tech, so boys are welcome too! We think the world of software engineering can only benefit from having more women on board and creating a more diverse field.</p>
        <p>Professional coders aren't necessarily male. That is what we see as an undeniable fact, but also as a statement we want to enforce in the real world. That's why we hope you'll join us in making this difference. Research points out that diversity in the workspace can lead to a more productive and efficient work environment.</p>

        <p>We see it as our mission to break this vicious circle, help women to get into programming and have better carreer opportunities.</p>
        <h2>Where to find us</h2>
        <p>Want to host our next meetup? Interested in speaking or mentoring at any of the following events? Have a topic you think we should discuss or bring to light? Feel free to contact us anytime! Please join us on social media so that together we can make a difference!</p>
        <ul className="social-links">
          { socialLinks.map((item, i) => <SocialLink key={`identifier${i}`} title={item.title} url={item.url} img={item.img} />) }
        </ul>
      </div>
    );
  }
}
