import React from 'react';

export default function Slide(props) {
  const {
    slideUrl, linkUrl, linkTitle, text, authorText, authorUrl,
  } = props;
  return (
    <figure>
      <embed src={slideUrl} width="595" height="485" allowFullScreen />
      <figcaption>
        {linkUrl ? <a href={linkUrl} title={linkTitle} target="_blank" rel="noopener noreferrer">{text}</a> : <span>{text}</span>} by {authorUrl ? <a target="_blank" href={authorUrl} rel="noopener noreferrer">{authorText}</a> : <span>{authorText}</span>}
      </figcaption>
    </figure>
  );
}
