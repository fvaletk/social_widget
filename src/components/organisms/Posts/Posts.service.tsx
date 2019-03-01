/** Dependencies */
import axios from 'axios';

/** Methods */
export const fetchPosts = (url: string): object => {
  return axios.get(url)
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            throw error;
          });
};