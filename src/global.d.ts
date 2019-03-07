interface ITwitterResponse {
  created_at: string;
  id: any;
  id_str: string;
  text: string;
  truncated: boolean;
  entities: any;
  source: string;
  in_reply_to_status_id?: any;
  in_reply_to_status_id_str?: any;
  in_reply_to_user_id?: any;
  in_reply_to_user_id_str?: any;
  in_reply_to_screen_name?: any;
  user: ITwitterUser;
  geo?: any;
  coordinates?: any;
  place: Place;
  contributors?: any;
  is_quote_status: boolean;
  retweet_count: number;
  favorite_count: number;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  lang: string;
  network: string;
  entity_id: string;
  queued_at: any;
  timeline_id: string;
  possibly_sensitive_appealable?: boolean;
  extended_entities: any;
}

interface ITwitterUser {
  id: any;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: string;
  entities: any;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset?: any;
  time_zone?: any;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: string;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  has_extended_profile: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following: boolean;
  follow_request_sent: boolean;
  notifications: boolean;
  translator_type: string;
}

interface IFacebookResponse {
  id: string;
  from: IFacebookFrom;
  message: string;
  created_time: string;
  like_count?: number;
  user_likes?: boolean;
  can_remove?: boolean;
  network: string;
  facebook_id: string;
  kind: string;
  in_reply_to_status_id_str?: string;
  order_id: string;
  entity_id: string;
  score: string;
  queued_at: number;
  timeline_id: string;
  picture?: string;
  link?: string;
  name?: string;
  icon?: string;
  actions?: any;
  privacy?: any;
  type?: string;
  status_type?: string;
  object_id?: string;
  application?: any;
  updated_time?: string;
  is_hidden?: boolean;
  is_expired?: boolean;
  likes?: any;
  images?: any;
  caption?: string;
  description?: string;
  shares?: any;
  comments?: any;
  to?: any;
  message_tags?: any;
  source?: string;
  properties?: any;
  format?: any;
}

interface IFacebookFrom {
  id: string;
  name: string;
  broadcast_name: string;
  category?: string;
}

interface IPost {
  profile_image_url: string;
  name: string;
  created_at: string;
  content: string;
}