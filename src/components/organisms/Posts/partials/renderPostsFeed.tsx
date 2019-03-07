/** Dependencies */
import React from 'react';

/** Types */
type PostsResponse = IFacebookResponse | ITwitterResponse;

/** Methods */
const renderPosts = (posts: Array<PostsResponse>) => {
  return <p>Number of posts {posts.length}</p>;
};

export const renderPostsFeed = (status: string, posts: Array<PostsResponse>) => {
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