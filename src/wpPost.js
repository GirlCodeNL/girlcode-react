import React from 'react';

export default function WPPost(props) {
  return (
    <a className="newsitem" href={`${props.URL}/${props.slug}`} target="_blank">
      <figure className="image">
        <img src={props.wpImage} alt="" />
      </figure>
      <div className="col">
        <h4>{props.title}</h4>
        <p>{props.excerpt}</p>
        <div className="metadata">
          <p className="date">{props.wpDate}</p>
          {props.author ?
            <figure className="author">
              <figcaption>{props.author.nice_name}</figcaption>
              <img src="{{author.avatar_URL}}" alt="{{author.nice_name}}" />
            </figure>
          : null}
        </div>
      </div>
    </a>
  );
}
