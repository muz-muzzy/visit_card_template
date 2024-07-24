import React, { useState, useEffect } from 'react';
import "./CommentListStyles.css";

import axios from 'axios';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/get-comments');
        console.log('API Response:', response.data);
        setComments(response.data);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="commentContainer">
      {comments && comments.length > 0 ? (
        comments.map(comment => (
          <div key={comment.id} className="commentItem" style={{ marginBottom: '10px' }}>
            <span className="authorName">{comment.author_name}</span>
            <label className="commentLabel">{comment.content}</label>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentList;