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

type State = {
  status: 'loading' | 'error',
  posts: any // TODO: Add Posts Interface
}

export class Posts extends Component<Props, State> {
  async componentDidMount() {
    const { url } = this.props;
    try {
      const posts = await fetchPosts(url);
      this.setState({posts});
    } catch(error) {

    }
  }

  render(){
    const { state } = this;
    const { loading } = state;

    return (
      loading 
      ? <p>Loading...</p>
      : <p>Hello from posts</p>
    )
  }
};