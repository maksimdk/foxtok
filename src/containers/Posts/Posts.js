import React, { Fragment } from 'react';

import { Post } from '../../components/Post';
import { PostContextProvider } from '../../contexts/Post.context';
import { usePosts } from '../../hooks/usePosts';
import { Loader } from '../../components/Loader';

export const Posts = () => {
  const { posts, loading } = usePosts();

  return (
    <Loader loading={loading}>
      <PostContextProvider>
        {posts.map((data, index) => (
          <Fragment key={data.id}>
            <Post {...data} />
            {posts.length - 1 > index ? <hr /> : null}
          </Fragment>
        ))}
      </PostContextProvider>
    </Loader>
  );
};
