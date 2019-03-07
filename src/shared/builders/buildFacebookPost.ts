/** Methods */
const getLink = (link: string | undefined) : string => {
    if (typeof link === "string") {
      return link;
    } else {
      return "https://academist-app-production.s3.amazonaws.com/uploads/user/profile_image/499/default_user_icon.png";
    }
  };
  
  export const buildFacebookPost = (post: IFacebookResponse) : IPost => {
    return {
      profile_image_url: getLink(post.link),
      name: post.from.name,
      created_at: post.created_time,
      content: post.message
    };
  };