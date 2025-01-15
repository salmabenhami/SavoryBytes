import React from "react";
import { useParams } from "react-router-dom";
// import { initialStateNormal } from "../../FichierRecepies/normalVf";
// import { initialeStateLactoseFree } from "../../FichierRecepies/LactoseFreevf";
// import { diet } from "../../FichierRecepies/dietFriendlyVf";
 
const Categories = () => {
  const { mode, categ } = useParams();
 
//   let recipes = [];
 
  // Filtrer les recettes en fonction du mode et de la catégorie
//   if (mode === "Normal") {
//     recipes = initialStateNormal.filter((recipe) => recipe.category === categ);
//   } else if (mode === "diet") {
//     recipes = diet.filter((recipe) => recipe.category === categ);
//   } else if (mode === "lactose-free") {
//     recipes = initialeStateLactoseFree.filter((recipe) => recipe.category === categ);
//   }
 
  return (
    <div>
      <h1>Recettes pour {mode.toUpperCase()} - {categ.toUpperCase()}</h1>
      {/* {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h2>{recipe.recipeTitle}</h2>
              <p>{recipe.description}</p>
              <p>Rating: {recipe.rating}</p>
              <p>Preparation Time: {recipe.preparationTime}</p>
              <p>Cooking Time: {recipe.cookingTime}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune recette trouvée pour cette catégorie.</p>
      )} */}
    </div>
  );
};
 
export default Categories;