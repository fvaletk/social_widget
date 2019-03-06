/** Dependencies */
import React, { Component } from 'react';

/** Services */
import { fetchPosts } from './Posts.service';

/** Props */
type Props = {
  url: string,
  amount: number,
  interval: number
}

/** State */
type State = {
  status: 'loading' | 'error' | 'done',
  posts: any // TODO: Add Posts Interface
}

export class Posts extends Component<Props, State> {
  state: State = {
    status: 'loading',
    posts: {}
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

  /** Custom Methods */
  // TODO: Add Posts Interface
  renderContent(status: string, posts: any) {
    switch (status) {
      case 'loading':
        return <p>Loading...</p>
      case 'error':
        return <p>Something went wrong...</p>
      case 'done':
        return <p>Number of Posts: {posts.length}</p>
      default:
        return <p>Something went wrong...</p>
    }
  }

  render(){
    const { state, renderContent } = this;
    const { status, posts } = state;

    return (
      renderContent(status, posts)
    )
  }
};