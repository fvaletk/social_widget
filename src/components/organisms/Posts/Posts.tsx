/** Dependencies */
import React, { Component } from 'react';

/** Services */
import { fetchPosts } from '../../../shared';

/** Partials */
import { renderPostsFeed } from './partials';

/** Types */
type Props = {
  url: string,
  amount: number,
  interval: number
}

type State = {
  status: 'loading' | 'error' | 'done',
  posts: Array<IPost>
}

export class Posts extends Component<Props, State> {
  state: State = {
    status: 'loading',
    posts: []
  }
  
  /** Lifecycle methods */
  async componentDidMount() {
    const { url } = this.props;
    try {
      const posts = await fetchPosts(url);
      this.setState({status: 'done', posts});
    } catch(error) {
      this.setState({status: 'error'});
    }
  }

  render(){
    const { state } = this;
    const { status, posts } = state;

    return (
      renderPostsFeed(status, posts)
    )
  }
};