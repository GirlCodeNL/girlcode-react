import React from 'react';

export default function MediumPost(props) {
  return (
    <a className="newsitem" href="{{mediumPostUrl}}" target="_blank">
      <figure className="image">
        <img src="{{image}}" alt="" />
      </figure>
      <div className="col">
        <h4>{props.title}</h4>
        <p>{props.excerpt}</p>
        <div className="metadata">
          <p className="date">{props.firstPublishedAt}</p>
          <p className="lang">({props.detectedLanguage})</p>
          {props.displayAuthor ?
            <figure className="author">
              <figcaption>{props.author}</figcaption>
              <img src={props.author} alt={props.author} />
            </figure>
          : null}
        </div>
      </div>
    </a>
  );
}
