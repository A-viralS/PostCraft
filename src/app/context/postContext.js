// PostContext.js
'use client'
import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postData, setPostData] = useState(null);

  return (
    <PostContext.Provider value={{ postData, setPostData }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
