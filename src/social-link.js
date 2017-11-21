import React from 'react';

export default function SocialLink(props) {
  return (
    <li>
      <a href={props.url} title={props.title} target="_blank">
        <img alt="icon" className="social-button-footer icon" src={props.img} />
      </a>
    </li>
  );
}
