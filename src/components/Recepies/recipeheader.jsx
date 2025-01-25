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

  // Fonction pour afficher les étoiles
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Nombre d'étoiles pleines
    const hasHalfStar = rating % 1 !== 0; // Vérifie s'il y a une étoile à moitié pleine
    const emptyStars = 5 - Math.ceil(rating); // Nombre d'étoiles vides

    const stars = [];

    // Ajouter les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          style={{ color: '#B55D51', fontSize: '1.2em' }} // Couleur dorée pour les étoiles pleines
        />
      );
    }

    // Ajouter l'étoile à moitié pleine si nécessaire
    if (hasHalfStar) {
      stars.push(
        <div key="half-star" style={{ position: 'relative', display: 'inline-block' }}>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: '#ccc', fontSize: '1.2em' }} // Couleur grise pour la partie vide
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '50%', overflow: 'hidden' }}>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: '#B55D51', fontSize: '1.2em' }} // Couleur dorée pour la partie pleine
            />
          </div>
        </div>
      );
    }

    // Ajouter les étoiles vides
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStar}
          style={{ color: '#ccc', fontSize: '1.2em' }} // Couleur grise pour les étoiles vides
        />
      );
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
        <div style={{ color: "#B55D51", display: 'flex', alignItems: 'center', gap: '5px' }}>
          <b>{recipe.rating}</b>
          {renderStars(recipe.rating)}
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;