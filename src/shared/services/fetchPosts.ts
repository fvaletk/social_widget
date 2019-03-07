/** Dependencies */
import axios from 'axios';

/** Services */
import { serializePosts } from '../serializers';

/** Methods */
export const fetchPosts = async (url: string) : Promise<any> => {
  try {
    const response = await axios.get(url);
    return serializePosts(response.data);
  } catch(error) {
    throw error;
  }
};