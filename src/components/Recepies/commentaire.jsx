import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../redux/recepiesReducer'; 
import { v4 as uuidv4 } from 'uuid'; 
import Comments from './commentlist';

const CommentForm = ({ recipeId }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentText.trim()) {
      alert("Le commentaire ne peut pas être vide.");
      return;
    }

    const newComment = {
      id: uuidv4(),
      user: currentUser.id,
      comment: commentText,
      rating: rating,
    };

    dispatch(addComment({ recipeId, comment: newComment }));

    setCommentText('');
    setRating(0);
  };

  return (
    <div>
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Ajoutez un commentaire..."
          rows="4"
          cols="50"
          required
        />
        <br />

        <label>
          Note (entre 1 et 5) :
          <input
            type="number"
            value={rating}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value >= 0 && value <= 5) {
                setRating(value);
              }
            }}
            min="0"
            max="5"
            required
          />
        </label>
        <br />
        <button type="submit">Comment</button>
      </form>
      <Comments/>
    </div>
  );
};

export default CommentForm;