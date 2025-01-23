import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectFilteredRecipes  } from  '../../redux/recepiesReducer';
import { Link } from 'react-router-dom';
import Card from '../pages/Card';
import "../../styles/CardStyle.css";
const Categories = () => {
  const { mode, categ } = useParams();

  const recipes = useSelector(state => selectFilteredRecipes(state, mode, categ));

  return (
    <div>
      <h1>Recettes pour {mode} - {categ}</h1>
      <div  >
      {recipes.length > 0 ? (
        <div className="card-container">
          {recipes.map(recipe => (
            <div key={recipe.id} className="card-wrapper">
 <Link to={`/recette/${mode}/${categ}/${recipe.recipeTitle.toLowerCase().replace(/ /g, '-')}`} className="plain-link">
                <Card recipe={recipe}/>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucune recette trouvée pour cette catégorie.</p>
      )}
      </div>
    </div>
  );
};

export default Categories;