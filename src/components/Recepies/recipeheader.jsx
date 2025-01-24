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
            color: isSaved ? '#FFFFFF' : '#B55D51', // Couleur du texte et de l'icône
            border: `1px solid #B55D51`, // Bordure de couleur #B55D51
            backgroundColor: isSaved ? '#B55D51' : 'transparent', // Fond transparent ou #B55D51
            padding: '8px 16px', // Espacement interne
            borderRadius: '5px', // Coins arrondis
            cursor: 'pointer', // Curseur en forme de main
            display: 'inline-flex', // Alignement horizontal
            alignItems: 'center', // Centrage vertical
            gap: '8px', 
          }}
          onClick={handleAddToFavorites} // Gestionnaire de clic
        >
          <FontAwesomeIcon icon={faHeart} />
          <span>{isSaved ? 'Saved' : 'Save'}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;