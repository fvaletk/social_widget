/** Dependencies */
import React, { Component } from 'react';

/** Styles */
import './Post.css';

/** Props */
type Props = {
  info: any
};

export class Post extends Component<Props> {
  render() {
    return (
      <p>Hello from posts</p>
    )
  }
};