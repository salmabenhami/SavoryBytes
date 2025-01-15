import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faComments, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const RecipeDetails = () => {
  const { title } = useParams();
  
  const recipes = useSelector(state => [
    ...state.recipes.normal,
    ...state.recipes.lactoseFree,
    ...state.recipes.dietFriendly
  ]);
  
  const recipe = recipes.find(
    r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
  );

  const [checkedIngredients, setCheckedIngredients] = useState({});

  const handleCheckboxChange = (ingredient) => {
    setCheckedIngredients(prevState => ({
      ...prevState,
      [ingredient]: !prevState[ingredient]
    }));
  };

  if (!recipe) {
    return <p>Recette non trouvée</p>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 1; i <= fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
    }
    return stars;
  };

  return (
    <div>
      <span style={{ fontStyle: 'italic', color: 'gray',marginLeft:'40px' }}>
        <Link to={`/${recipe.mode}`} style={{ color: 'gray', textDecoration: 'none' }}>
          Mode{'>'}{recipe.mode}
        </Link> 
        {' > '}
        <Link to={`/${recipe.mode}/${recipe.category.replace(/\s+/g, '-')}`} style={{ color: 'gray', textDecoration: 'none' }}>
          {recipe.category}
        </Link> 
        {' > '}
        <Link to={`/${recipe.mode}/${recipe.category.replace(/\s+/g, '-')}/${recipe.recipeTitle.replace(/\s+/g, '-')}`} style={{ color: 'gray', textDecoration: 'none' }}>
          {recipe.recipeTitle}
        </Link>
      </span>
      <div>
        <h1 style={{marginLeft:'40px'}}>{recipe.description}</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around',width:'60%',marginLeft:'0px' }}>
        <div style={{color:"#B55D51"}}>
          <FontAwesomeIcon icon={faUser}/><span> {recipe.author}</span>
        </div>
        <div style={{color:"#B55D51"}}>
          <FontAwesomeIcon icon={faCalendarAlt}/><span> {recipe.date}</span>
        </div>
        <div style={{color:"#B55D51"}}>
          <FontAwesomeIcon icon={faComments} /> <span> {recipe.comments.length} comments</span>
        </div>
        <div style={{color:"#B55D51"}}>
          <FontAwesomeIcon icon={faHeart} /> <span>Save</span>
        </div>
        <div style={{color:"#B55D51"}}>
          <b>{recipe.rating}</b>
          {renderStars(recipe.rating)}
        </div>
      </div>
      <div style={{ margin: '0 auto', padding: 0 }}>
      <div style={{ width:'50%', marginLeft:'20<px'}}>
      <img 
          src={recipe.picture} 
          style={{ 
            width: '100%',
      height: '700px',
            objectFit: 'contain', 
            borderRadius: '10px'
          }} 
          alt={recipe.recipeTitle} 
        />
        </div>
  
</div>

      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around', width:'50%'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
          <p style={{color:'grey', fontWeight:'bold'}}>Preparation Time</p>
          <p style={{ fontWeight:'bold',fontSize:'12px',textAlign:'center'}}>{recipe.preparationTime}</p>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          <p style={{color:'grey', fontWeight:'bold'}}>Cooking Time</p>
          <p style={{ fontWeight:'bold',fontSize:'12px',textAlign:'center'}}>{recipe.cookingTime}</p>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          <p style={{color:'grey', fontWeight:'bold'}}>Serving</p>
          <p style={{ fontWeight:'bold',fontSize:'12px',textAlign:'center'}}>{recipe.servings} serving</p>
        </div>
      </div>
      <div>
        <h2>Nutrition Facts</h2>
        <ul>
          <li>Calories: {recipe.nutritionFacts.calories}</li>
          <li>Protein: {recipe.nutritionFacts.protein}</li>
          <li>Carbohydrates: {recipe.nutritionFacts.carbohydrates}</li>
          <li>Fat: {recipe.nutritionFacts.fat}</li>
        </ul>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ul>
          {Object.entries(recipe.ingredients).map(([ingredient, quantity]) => (
            <li key={ingredient}>
              <label style={{ textDecoration: checkedIngredients[ingredient] ? 'line-through' : 'none',color: checkedIngredients[ingredient] ? 'gray' : 'black' }}>
                <input 
                  type="checkbox" 
                  checked={checkedIngredients[ingredient] || false} 
                  onChange={() => handleCheckboxChange(ingredient)} 
                />
                <span>{quantity}</span> {ingredient}
              </label>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default RecipeDetails;