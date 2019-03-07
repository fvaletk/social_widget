/** Types */
type Response = IFacebookResponse | ITwitterResponse;

/** Builders */
import {
  buildFacebookPost,
  buildTwitterPost
} from '../builders';

/** Methods */
export const serializePosts = (posts: Array<Response>) : Array<IPost> => {
  let serialized_posts : Array<IPost> = [];
  posts.map((post) => {
    switch (post.network) {
      case "facebook":
        serialized_posts.push(buildFacebookPost(post as IFacebookResponse));
        break;
    
      default:
        serialized_posts.push(buildTwitterPost(post as ITwitterResponse));
        break;
    }
  });
  return serialized_posts;
};