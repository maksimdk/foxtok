import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext({
  activeVideoId: null,
  setActiveVideoId: () => {},
});

export const PostContextProvider = ({ children }) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <PostContext.Provider value={{ activeVideoId, setActiveVideoId }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
