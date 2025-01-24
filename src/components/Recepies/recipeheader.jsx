import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faComments, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const RecipeHeader = ({ recipe, isSaved, handleAddToFavorites, renderStars }) => {
  return (
    <div>
      <div>
        <h1 style={{ marginLeft: '40px' }}>{recipe.description}</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%', marginLeft: '0px' }}>
        <div style={{ color: "#B55D51" }}>
          <FontAwesomeIcon icon={faUser} /><span> {recipe.author}</span>
        </div>
        <div style={{ color: "#B55D51" }}>
          <FontAwesomeIcon icon={faCalendarAlt} /><span> {recipe.date}</span>
        </div>
        <div style={{ color: "#B55D51" }}>
          <FontAwesomeIcon icon={faComments} /> <span> {recipe.comments.length} comments</span>
        </div>
        <div style={{ color: "#B55D51" }}>
          <b>{recipe.rating}</b>
          {renderStars(recipe.rating)}
        </div>
        <div
          style={{
            color: isSaved ? '#FFFFFF' : '#B55D51', 
            border: `1px solid #B55D51`, 
            backgroundColor: isSaved ? '#B55D51' : 'transparent', 
            padding: '8px 16px', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            display: 'inline-flex',
            alignItems: 'center', 
            gap: '8px', 
          }}
          onClick={handleAddToFavorites} 
        >
          <FontAwesomeIcon icon={faHeart} />
          <span>{isSaved ? 'Saved' : 'Save'}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;