import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Home = () => {
  const { username, role } = useSelector((state) => state.auth.currentUser || {});
  const { normal, dietFriendly, lactoseFree } = useSelector((state) => state.recipes);

  const allRecipes = [...normal, ...dietFriendly, ...lactoseFree];

  return (
    <div>
      <h1>Welcome {username || "Guest"}!</h1>
      <p>Your role is: {role || "N/A"}</p>
      {allRecipes && allRecipes.length > 0 ? (
        <ul>
          {allRecipes.map((recipe, idx) => {
            const mode = recipe.mode;
            const categ = recipe.category;
            return (
              <li key={idx}>
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

export default Home;
