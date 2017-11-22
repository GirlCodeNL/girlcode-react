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

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediumposts: [],
      wpPosts: [],
    };
    this.wpPosts = async () => {
      const wpSite = 'inekescheffers.com';
      const category = 'girl-code';
      this.setState({ wpPosts: await createWPFetcher(wpSite)(category) });
    };

    this.getMediumPosts = () => {
      const tag = 'girlcode';
      const latestPostsUrl = `https://medium.com/tag/${tag}?format=json`;
      const request = new Request(latestPostsUrl, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'default',
      });
      // const MEDIUM_SCRIPT_EXECUTION_PREVENTION = '])}while(1);</x>';
      // trying to put both the request and response in a cache instance
      // as per https://jakearchibald.com/2015/thats-so-fetch/ (scroll to "no-cors and opaque responses")
      fetch(request.clone()).then(response => caches.put(request, response.clone()));
      console.log(caches);
      // .then((content) => {
      //   console.log('content', content);
      //   const json = JSON.parse(content.replace(MEDIUM_SCRIPT_EXECUTION_PREVENTION, ''));
      //   return json.payload.value.slice(0, 3).map(post => post);
      // });
    };
  }

  componentDidMount() {
    this.wpPosts();
    this.getMediumPosts();
  }

  render() {
    console.log(this.state.mediumposts);
    return (
      <div>
        <section className="blogposts">
          <h3>Medium posts</h3>
          {this.state.mediumposts.length ? this.state.mediumposts.map(mediumPost => (
            <MediumPost {...mediumPost} />
          )) : null}
        </section>
        <section>
          <h3>{'Ineke\u2019s blogposts'}</h3>
          {this.state.wpPosts.length ? this.state.wpPosts.map(post =>
            <WPPost key={post.ID} {...post} />) : null}
        </section>
      </div>
    );
  }
}
