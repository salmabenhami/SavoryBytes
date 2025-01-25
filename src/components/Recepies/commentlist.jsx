import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSave, faTimes, faStar } from '@fortawesome/free-solid-svg-icons';

const CommentList = ({ comments, currentUser, isAdmin, recipeId, onDeleteComment, onUpdateComment }) => {
  const [editingCommentId, setEditingCommentId] = useState(null); 
  const [updatedCommentText, setUpdatedCommentText] = useState(''); 
  const [updatedRating, setUpdatedRating] = useState(0); 

  const startEditingComment = (commentId, currentComment, currentRating) => {
    setEditingCommentId(commentId);
    setUpdatedCommentText(currentComment);
    setUpdatedRating(currentRating);
  };
  
  const cancelEditingComment = () => {
    setEditingCommentId(null);
    setUpdatedCommentText('');
    setUpdatedRating(0);
  };

  const saveEditedComment = (commentId) => {
    if (updatedCommentText.trim() && updatedRating >= 1 && updatedRating <= 5) {
      onUpdateComment(recipeId, commentId, {
        comment: updatedCommentText,
        rating: updatedRating,
      });
      setEditingCommentId(null);
      setUpdatedCommentText('');
      setUpdatedRating(0);
    } else {
      alert('Please enter a valid comment and rating (1-5).');
    }
  };

  const handleRatingClick = (ratingValue) => {
    setUpdatedRating(ratingValue);
  };

  const renderStars = (ratingValue) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{
            color: i <= ratingValue ? '#B55D51' : '#ccc',
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
    <div style={{ margin: '20px' }}>
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} style={{ marginBottom: '10px' }}>
            <strong>{comment.username}</strong>:
            {editingCommentId === comment.id ? (
              <div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                  <input
                    type="text"
                    value={updatedCommentText}
                    onChange={(e) => setUpdatedCommentText(e.target.value)}
                    style={{
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                    }}
                    placeholder="Edit your comment"
                  />
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {renderStars(updatedRating)}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button
                    onClick={() => saveEditedComment(comment.id)}
                    style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    <FontAwesomeIcon icon={faSave} /> Save
                  </button>
                  <button
                    onClick={cancelEditingComment}
                    style={{
                      backgroundColor: '#ff4d4d',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p>{comment.comment}</p>
                <div style={{ display: 'flex', gap: '5px' }}>
                  {renderStars(comment.rating)}
                </div>
              </>
            )}
            {currentUser && currentUser.id === Number(comment.user) && (
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                {editingCommentId !== comment.id && (
                  <button
                    onClick={() => startEditingComment(comment.id, comment.comment, comment.rating)}
                    style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                )}
              </div>
            )}
            {(currentUser && (currentUser.id === Number(comment.user) || isAdmin)) && (
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button
                  onClick={() => onDeleteComment(recipeId, comment.id)}
                  style={{
                    backgroundColor: '#ff4d4d',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </div>
            )}
          </div>
        ))
      ) : null}
    </div>
  );
};

export default CommentList;
