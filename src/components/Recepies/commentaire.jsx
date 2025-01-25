import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../redux/recepiesReducer'; 
import { v4 as uuidv4 } from 'uuid'; 
import Comments from './commentlist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{
            color: i <= rating ? '#B55D51' : '#ccc',
            fontSize: '1.5em',
            cursor: 'pointer',
          }}
          onClick={() => handleRatingClick(i)}
        />
      );
    }
    return stars;
  };

  return (
    <div>
      <h3>Commentaires</h3>
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

        <div>
          <label>Note :</label>
          <div style={{ display: 'flex', gap: '5px' }}>
            {renderStars()}
          </div>
        </div>
        <br />
        <button type="submit">Commenter</button>
      </form>
      <Comments />
    </div>
  );
};

export default CommentForm;
