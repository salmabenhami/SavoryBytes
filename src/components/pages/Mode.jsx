import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getRecipesByMode } from '../../redux/recepiesReducer';

const Mode = () => {
  const { mode } = useParams();
  const recipes = useSelector(state => getRecipesByMode(state, mode));

  return (
    <div>
      <h1>Recettes pour {mode.toUpperCase()}</h1>
      {recipes && recipes.length > 0 ? (
        <ul>
          {recipes.map(recipe => {
            const categ = recipe.category;
            return (
              <li key={recipe.id}>
                <Link
                  to={`/recette/${mode}/${categ}/${encodeURIComponent(
                    recipe.recipeTitle.toLowerCase().replace(/ /g, '-')
                  )}`}
                >
                  {recipe.recipeTitle}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Aucune recette trouvée pour cette catégorie.</p>
      )}
    </div>
  );
};

export default Mode;
