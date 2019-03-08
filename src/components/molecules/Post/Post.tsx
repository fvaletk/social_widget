/** Dependencies */
import React, { Component } from 'react';
import clsx from 'clsx';

/** Styles */
import './Post.css';

/** Atoms */
import { Avatar } from '../../atoms';

/** Props */
type Props = {
  info: IPost
};

export class Post extends Component<Props & JSX.IntrinsicElements['li']> {
  render() {
    const { props } = this;
    const { info, className } = props;

    return (
      <li className={clsx("Post__item", className)}>
        <Avatar
          src={info.profile_image_url}
          className="Post__avatar"
        >
        </Avatar>
      </li>
    )
  }
};