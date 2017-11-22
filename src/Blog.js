/* eslint-disable no-restricted-globals */
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
      const MEDIUM_SCRIPT_EXECUTION_PREVENTION = '])}while(1);</x>';
      const header = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      });
      fetch(latestPostsUrl, {
        method: 'GET',
        headers: header,
        mode: 'no-cors',
        cache: 'default',
      })
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error('Something went wrong!');
        })
        .then((data) => {
          console.log(data);
          const json = JSON.parse(data.replace(MEDIUM_SCRIPT_EXECUTION_PREVENTION, ''));
          return json.payload.value.slice(0, 3).map(post => post);
        })
        .catch((e) => {
          console.error(e);
          return e;
        });
    };
  }

  componentDidMount() {
    this.wpPosts();
    // this.getMediumPosts();
  }

  render() {
    return (
      <div>
        {this.state.mediumposts.length ? (
          <section className="blogposts">
            <h3>Medium posts</h3>
            {this.state.mediumposts.map(mediumPost => <MediumPost {...mediumPost} />)}
          </section>
        ) : null}
        {this.state.wpPosts.length ? (
          <section>
            <h3>{'Ineke\u2019s blogposts'}</h3>
            {this.state.wpPosts.map(post =>
              <WPPost key={post.ID} {...post} />)}
          </section>
        ) : null}
      </div>
    );
  }
}
