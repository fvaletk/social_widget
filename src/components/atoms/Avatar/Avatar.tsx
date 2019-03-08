/** Dependencies */
import React from 'react';
import clsx from 'clsx';

/** Assets */
import './Avatar.css';
import default_avatar from '../../../assets/images/default_avatar.png';

/** Types */
type Props = {
  src: string,
}

/** Methods */
export const Avatar : React.FunctionComponent<Props & JSX.IntrinsicElements['img']> = (Props) => {
  const { src, className } = Props;
  return (
    <img src={src} alt="user" className={clsx('Avatar__image', className)}/>
  )
};

/** Default Props */
Avatar.defaultProps = {
  src: default_avatar,
}