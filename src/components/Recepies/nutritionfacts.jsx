import { useSelector } from "react-redux";
import { useParams } from "react-router";

const NutritionFacts = () => {
    const { title } = useParams();
    
    const recipes = useSelector(state => [
      ...state.recipes.normal,
      ...state.recipes.lactoseFree,
      ...state.recipes.dietFriendly
    ]);
    
    const recipe = recipes.find(
      r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
    );
    return(
        <div >
        <h2 >Nutrition Facts</h2>
        <ul>
          <li>Calories: {recipe.nutritionFacts.calories}</li>
          <li>Protein: {recipe.nutritionFacts.protein}</li>
          <li>Carbohydrates: {recipe.nutritionFacts.carbohydrates}</li>
          <li>Fat: {recipe.nutritionFacts.fat}</li>
        </ul>
      </div>
    )

    
} 
export default NutritionFacts