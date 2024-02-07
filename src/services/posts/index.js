import axios from 'axios';
import { postsUrl } from '../constants';

export const getPosts = async () => {
  const { data: posts } = await axios.get(postsUrl);
  return posts;
};
