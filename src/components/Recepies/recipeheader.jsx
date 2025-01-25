import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faComments, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const RecipeHeader = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  
  const recipes = useSelector((state) => [
    ...state.recipes.normal,
    ...state.recipes.lactoseFree,
    ...state.recipes.dietFriendly,
  ]);

  const users = useSelector((state) => state.auth.users);
  const [isSaved, setIsSaved] = useState(false);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 1; i <= fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
    }
    return stars;
  };

  // Recherche de la recette en fonction du titre
  const recipe = recipes.find(
    (r) => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
  );

  // Si aucune recette n'est trouvée, retourner un message d'erreur
  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  // Vérification si les commentaires existent avant d'afficher leur nombre
  const commentCount = recipe.comments ? recipe.comments.length : 0;

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
          <FontAwesomeIcon icon={faComments} /> <span> {commentCount} comments</span>
        </div>
        <div style={{ color: "#B55D51" }}>
          <b>{recipe.rating}</b>
          {renderStars(recipe.rating)}
        </div>
        
        </div>
      </div>
  );
};

export default RecipeHeader;
