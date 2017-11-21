/* eslint-disable no-return-await */
import React, { Component } from 'react';

import MediumPost from './mediumPost';
import WPPost from './wpPost';

const createWPFetcher = site => (category) => {
  const wpPostsEndPoint = `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts?category=${category}`;
  return fetch(wpPostsEndPoint).then(response => response.text()).then((content) => {
    const parsed = JSON.parse(content);
    return parsed.posts;
  });
};

const wpPosts = () => {
  const wpSite = 'inekescheffers.com';
  const category = 'girl-code';
  return createWPFetcher(wpSite)(category);
};

const getMediumPosts = () => {
  const tag = 'girlcode';
  const latestPostsUrl = `https://medium.com/tag/${tag}?format=json`;
  const request = new Request(latestPostsUrl, {
    method: 'GET',
    mode: 'no-cors',
    cache: 'default',
  });
  // const MEDIUM_SCRIPT_EXECUTION_PREVENTION = '])}while(1);</x>';
  fetch(request.clone()).then(response => caches.put(request, response.clone()));
  console.log(caches);
  // .then((content) => {
  //   console.log('content', content);
  //   const json = JSON.parse(content.replace(MEDIUM_SCRIPT_EXECUTION_PREVENTION, ''));
  //   return json.payload.value.slice(0, 3).map(post => post);
  // });
};

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.mediumposts = getMediumPosts();
    this.wpPosts = wpPosts();
  }

  render() {
    console.log(this.mediumposts);
    console.log(this.wpPosts);
    return (
      <div>
        <section className="blogposts">
          <h3>Medium posts</h3>
          {this.mediumposts.length ? this.mediumposts.map(mediumPost => (
            <MediumPost {...mediumPost} />
          )) : null}
        </section>
        <section>
          <h3>{'Ineke\u2019s blogposts'}</h3>
          {this.wpPosts.length ? this.wpPosts.map(post =>
            <WPPost {...post} />) : null}
        </section>
      </div>
    );
  }
}
