import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectFilteredRecipes  } from  '../../redux/recepiesReducer';
import { Link } from 'react-router-dom';
const Categories = () => {
  const { mode, categ } = useParams();

  const recipes = useSelector(state => selectFilteredRecipes(state, mode, categ));

  return (
    <div>
      <h1>Recettes pour {mode} - {categ}</h1>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
 <Link to={`/recette/${mode}/${categ}/${recipe.recipeTitle.toLowerCase().replace(/ /g, '-')}`}>
                {recipe.recipeTitle}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune recette trouvée pour cette catégorie.</p>
      )}
    </div>
  );
};

export default Categories;