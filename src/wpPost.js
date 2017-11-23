import React from 'react';
import striptags from 'striptags';

const wpDate = (date) => {
  const dateFormatted = new Date(date);
  return `${dateFormatted.getDate()} - ${dateFormatted.getMonth() + 1} - ${dateFormatted.getFullYear()}`;
};

const decodeHtml = (html) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const excerpt = (content) => {
  const searchKey = `^(.{${90}}[^\\s]*).*`;
  const regex = new RegExp(searchKey, 'ig');
  let trimmedString = content.replace(regex, '$1');

  if (trimmedString !== content) {
    trimmedString = `${trimmedString}\u2026`;
  } else {
    trimmedString = content;
  }
  return trimmedString;
};

export default function WPPost(props) {
  const keys = Object.keys(props.attachments);
  const attachment = props.attachments[keys[0]];
  const postImage = props.featured_image ? props.featured_image : attachment;
  return (
    <a className="newsitem" href={`${props.URL}/${props.slug}`} target="_blank">
      <div className="metadata">
        {props.author ?
          <figure className="author">
            <img src={props.author.avatar_URL} alt={props.author.nice_name} />
            <figcaption>{props.author.nice_name}</figcaption>
          </figure>
        : null}
        <p className="date">{wpDate(props.date)}</p>
      </div>
      {postImage ?
        <figure className="image preview-img">
          <img src={postImage.URL} alt="" />
        </figure>
      : null}
      <div className="col">
        <h4>{decodeHtml(striptags(props.title))}</h4>
        <p>{decodeHtml(striptags(excerpt(props.excerpt)))}</p>
      </div>
    </a>
  );
}
