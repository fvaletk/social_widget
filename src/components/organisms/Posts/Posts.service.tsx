/** Dependencies */
import axios from 'axios';

/** Methods */
/** TODO: Change the returned type to other than any */
export const fetchPosts = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch(error) {
    throw error;
  }
};