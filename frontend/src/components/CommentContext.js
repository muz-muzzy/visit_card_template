// CommentContext.js
import React, { createContext, useContext, useState } from 'react';

const CommentContext = createContext();

export const useCommentContext = () => useContext(CommentContext);

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreComments = () => {
    setIsLoading(true);
    setTimeout(() => {
      setComments([...comments, /* новые комментарии */]);
      setIsLoading(false);
    }, 1000);
  };

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <CommentContext.Provider value={{ comments, isLoading, loadMoreComments, addComment }}>
      {children}
    </CommentContext.Provider>
  );
};