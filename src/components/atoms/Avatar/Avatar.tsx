/** Dependencies */
import React from 'react';

/** Assets */
import './Avatar.css';
import default_avatar from '../../../assets/images/default_avatar.png';

export const Avatar: React.FunctionComponent<JSX.IntrinsicElements['img']> = 
function Avatar({ className, ...rest}) {
  return <img className={`post__avatar ${className}`} {...rest}/>;
};

Avatar.defaultProps = {
  src: default_avatar,
}