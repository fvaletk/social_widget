/** Dependencies */
import React from 'react';

/** Style */
import '../Posts.css';

/** Molecules */
import { Post } from '../../../molecules';

/** Methods */
const renderPosts = (posts: Array<IPost>) => {
  return (
    <ul className="Posts__list">
      {
        posts.map((post) => {
          return <Post key={post.id} info={post}></Post>
        })
      }
    </ul>
  );
};

export const renderPostsFeed = (status: string, posts: Array<IPost>) => {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>
    case 'error':
      return <p>Something went wrong...</p>
    case 'done':
      return renderPosts(posts);
    default:
      return <p>Something went wrong...</p>
  }
};