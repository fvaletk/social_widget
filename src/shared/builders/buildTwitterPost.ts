/** Methods */
export const buildTwitterPost = (post: ITwitterResponse) : IPost => {
    return {
      id: post.id_str,
      profile_image_url: post.user.profile_image_url_https,
      name: post.user.name,
      created_at: post.created_at,
      content: post.text
    };
  };