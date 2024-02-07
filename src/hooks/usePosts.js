import { useEffect, useState } from 'react';
import { getPosts } from '../services/posts';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((data) => {
        setLoading(false);
        setPosts(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message());
      });
  }, []);

  return { posts, loading };
};
