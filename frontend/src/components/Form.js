// Form.js
import "./FormStyles.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCommentContext } from './CommentContext'; // Импортируем контекст

const Form = () => {
  const { addComment } = useCommentContext(); // Получаем функцию addComment из контекста
  const [commentText, setCommentText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    console.log(token);
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/create-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content: commentText }),
      });
      
      if (response.status === 401) {
        const refreshTokenResponse = await fetch('/api/refresh-token', {
          method: 'POST',
          credentials: 'include', // cookies
        });
        
        if (refreshTokenResponse.ok) {
          const { accessToken } = await refreshTokenResponse.json();
          localStorage.setItem('token', accessToken);
        } else {
          navigate('/login');
        }
      }

      const newComment = await response.json();
      addComment(newComment);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 2000);
    } catch (error) {
      console.error('Ошибка отправки комментария:', error);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Добавить комментарий</label>
        <textarea
          id="comment"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Введите ваш комментарий..."
        />
        <button className="btn" type="submit" disabled={!commentText.trim()}>
          {isSubmitted ? 'Отправлено!' : 'Отправить'}
        </button>
      </form>
    </div>
  );
};

export default Form;