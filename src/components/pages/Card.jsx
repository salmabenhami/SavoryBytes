import React from 'react';
import '../../styles/CardStyle.css';
const Card = ({ recipe }) => {
  if (!recipe) {
    return <div className="card">No recipe data available.</div>;
  }

  return (
    <div className="card">
      <img
        src={recipe.picture} 
        alt={recipe.recipeTitle}
        className="card-img"
      />
      <div className="card-content">
        <div className="card-rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              style={{ color: index < (recipe.rating || 0) ? 'orange' : '#ccc' }} 
            >
              ★
            </span>
          ))}
        </div>
        <h2 className="card-title">
          {recipe.recipeTitle || 'Untitled Recipe'}
        </h2>

        <div className="card-date-comments">
          <div>
            <span>⏰</span>
            <p>{recipe.date || 'Unknown Date'}</p>
          </div>
          <div>
            <span>💬</span>
            <p>{recipe.comments?.length || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

