import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import Card from "./Card";
import "../../styles/CardStyle.css";
import { div } from "framer-motion/client";

const Home = () => {
  const { username, role } = useSelector((state) => state.auth.currentUser || {});
  const { normal, dietFriendly, lactoseFree } = useSelector((state) => state.recipes);

  const allRecipes = [...normal, ...dietFriendly, ...lactoseFree];
  const top10Recipes = allRecipes
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <div>
      {top10Recipes.length > 0 ? (
        <div className="card-container">
          {top10Recipes.map(((recipe), idx) => {
            const mode = recipe.mode;
            const categ = recipe.category;
            return (
              <li key={recipe.id}>
                <Link
                key={recipe.id}
                to={`/recette/${mode}/${categ}/${encodeURIComponent(
                  recipe.recipeTitle.toLowerCase().replace(/ /g, '-')
                )}`}
                 className="plain-link"
              >
                <Card recipe={recipe} />
              </Link>
              </div>
            );
          })}
        </div>
      )  : (
        <p>Aucune recette trouvée pour cette catégorie.</p>
      )}
    </div>
  );
};

export default Home;
