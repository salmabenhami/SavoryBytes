// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector,useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt, faUser, faComments, faHeart, faStar,faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import {addToFavorites}from '../../redux/reducerUser';
// import { useNavigate } from 'react-router-dom'; 
// import { removeRecipe } from '../../redux/recepiesReducer'; 


// const RecipeDetails = () => {
//   const { title } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); 
//   const recipes = useSelector(state => [
//     ...state.recipes.normal,
//     ...state.recipes.lactoseFree,
//     ...state.recipes.dietFriendly
//   ]);
  
//   const recipe = recipes.find(
//     r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
//   );

//   const [checkedIngredients, setCheckedIngredients] = useState({});

//   const handleCheckboxChange = (ingredient) => {
//     setCheckedIngredients(prevState => ({
//       ...prevState,
//       [ingredient]: !prevState[ingredient]
//     }));
//   };
//   //favories
//   const handleAddToFavorites = () => {
//     if (recipe) {
//       dispatch(addToFavorites({ userId: 1, recipe })); 
//       alert('Recipe added to favorites!');
//     }
//   };
//   //---------------------delete
//   const handleDeleteRecipe = () => {
//     if (recipe) {
//       const isConfirmed = window.confirm('Êtes-vous sûr de vouloir supprimer cette recette ?');
//       if (isConfirmed) {
//         dispatch(removeRecipe({ mode: recipe.mode, id: recipe.id })); 
//         alert('Recette supprimée avec succès !');
//         navigate('/'); 
//       }
//     }
//   };
//   //---------------------edit
//   const handleEditRecipe = () => {
//     navigate(`/edit-recipe/${recipe.recipeTitle.replace(/\s+/g, '-')}`);
//   };
//   //---------------------
//   if (!recipe) {
//     return <p>Recette non trouvée</p>;
//   }

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const stars = [];
//     for (let i = 1; i <= fullStars; i++) {
//       stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
//     }
//     return stars;
//   };

//   return (
//     <div>
//       <span style={{ fontStyle: 'italic', color: 'gray',marginLeft:'40px' }}>
//         <Link to={`/${recipe.mode}`} style={{ color: 'gray', textDecoration: 'none' }}>
//           Mode{'>'}{recipe.mode}
//         </Link> 
//         {' > '}
//         <Link to={`/${recipe.mode}/${recipe.category.replace(/\s+/g, '-')}`} style={{ color: 'gray', textDecoration: 'none' }}>
//           {recipe.category}
//         </Link> 
//         {' > '}
//         <Link to={`/${recipe.mode}/${recipe.category.replace(/\s+/g, '-')}/${recipe.recipeTitle.replace(/\s+/g, '-')}`} style={{ color: 'gray', textDecoration: 'none' }}>
//           {recipe.recipeTitle}
//         </Link>
//       </span>
//       <div>
//         <h1 style={{marginLeft:'40px'}}>{recipe.description}</h1>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'space-around',width:'60%',marginLeft:'0px' }}>
//         <div style={{color:"#B55D51"}}>
//           <FontAwesomeIcon icon={faUser}/><span> {recipe.author}</span>
//         </div>
//         <div style={{color:"#B55D51"}}>
//           <FontAwesomeIcon icon={faCalendarAlt}/><span> {recipe.date}</span>
//         </div>
//         <div style={{color:"#B55D51"}}>
//           <FontAwesomeIcon icon={faComments} /> <span> {recipe.comments.length} comments</span>
//         </div>
//         <div style={{ color: "#B55D51", cursor: 'pointer' }} onClick={handleAddToFavorites}>
//           <FontAwesomeIcon icon={faHeart} /> <span>Save</span>
//         </div>
//         <div style={{color:"#B55D51"}}>
//           <b>{recipe.rating}</b>
//           {renderStars(recipe.rating)}
//         </div>
//       </div>
//       <div style={{ margin: '0 auto', padding: 0 }}>
//       <div style={{ width:'50%', marginLeft:'20<px'}}>
//       <img 
//           src={recipe.picture} 
//           style={{ 
//             width: '100%',
//       height: '700px',
//             objectFit: 'contain', 
//             borderRadius: '10px'
//           }} 
//           alt={recipe.recipeTitle} 
//         />
//         </div>
  
// </div>

//       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around', width:'50%'}}>
//         <div style={{display:'flex', flexDirection:'column'}}>
//           <p style={{color:'grey', fontWeight:'bold'}}>Preparation Time</p>
//           <p style={{ fontWeight:'bold',fontSize:'12px',textAlign:'center'}}>{recipe.preparationTime}</p>
//         </div>
//         <div style={{display:'flex', flexDirection:'column'}}>
//           <p style={{color:'grey', fontWeight:'bold'}}>Cooking Time</p>
//           <p style={{ fontWeight:'bold',fontSize:'12px',textAlign:'center'}}>{recipe.cookingTime}</p>
//         </div>
//         <div style={{display:'flex', flexDirection:'column'}}>
//           <p style={{color:'grey', fontWeight:'bold'}}>Serving</p>
//           <p style={{ fontWeight:'bold',fontSize:'12px',textAlign:'center'}}>{recipe.servings} serving</p>
//         </div>
//       </div>
//       <div>
//         <h2>Nutrition Facts</h2>
//         <ul>
//           <li>Calories: {recipe.nutritionFacts.calories}</li>
//           <li>Protein: {recipe.nutritionFacts.protein}</li>
//           <li>Carbohydrates: {recipe.nutritionFacts.carbohydrates}</li>
//           <li>Fat: {recipe.nutritionFacts.fat}</li>
//         </ul>
//       </div>
//       <div>
//         <h2>Ingredients</h2>
//         <ul>
//           {Object.entries(recipe.ingredients).map(([ingredient, quantity]) => (
//             <li key={ingredient}>
//               <label style={{ textDecoration: checkedIngredients[ingredient] ? 'line-through' : 'none',color: checkedIngredients[ingredient] ? 'gray' : 'black' }}>
//                 <input 
//                   type="checkbox" 
//                   checked={checkedIngredients[ingredient] || false} 
//                   onChange={() => handleCheckboxChange(ingredient)} 
//                 />
//                 <span>{quantity}</span> {ingredient}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div style={{ margin: '20px', display: 'flex', gap: '10px' }}>
//         <button 
//           onClick={handleEditRecipe}
//           style={{
//             backgroundColor: '#4CAF50',
//             color: 'white',
//             border: 'none',
//             padding: '8px 16px',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           <FontAwesomeIcon icon={faEdit} /> Modifier la recette
//         </button>
//         <button 
//           onClick={handleDeleteRecipe}
//           style={{
//             backgroundColor: '#ff4d4d',
//             color: 'white',
//             border: 'none',
//             padding: '8px 16px',
//             borderRadius: '5px',
//             cursor: 'pointer',
//           }}
//         >
//           <FontAwesomeIcon icon={faTrash} /> Supprimer la recette
//         </button>
//       </div>
      
//     </div>
//   );
// };

// export default RecipeDetails;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarAlt, faUser, faComments, faHeart, faStar, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { addToFavorites } from '../../redux/reducerUser';
// import { useNavigate } from 'react-router-dom';
// import { removeRecipe } from '../../redux/recepiesReducer';

// const RecipeDetails = () => {
//   const { title } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const recipes = useSelector(state => [
//     ...state.recipes.normal,
//     ...state.recipes.lactoseFree,
//     ...state.recipes.dietFriendly
//   ]);

//   const recipe = recipes.find(
//     r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
//   );

//   const [checkedIngredients, setCheckedIngredients] = useState({});

//   const handleCheckboxChange = (ingredient) => {
//     setCheckedIngredients(prevState => ({
//       ...prevState,
//       [ingredient]: !prevState[ingredient]
//     }));
//   };

//   const handleAddToFavorites = () => {
//     if (recipe) {
//       dispatch(addToFavorites({ userId: 1, recipe }));
//       alert('Recipe added to favorites!');
//     }
//   };

//   const handleDeleteRecipe = () => {
//     if (recipe) {
//       const isConfirmed = window.confirm('Are you sure you want to delete this recipe?');
//       if (isConfirmed) {
//         dispatch(removeRecipe({ mode: recipe.mode, id: recipe.id }));
//         alert('Recette supprimée avec succès !');
//         navigate('/');
//       }
//     }
//   };

//   const handleEditRecipe = () => {
//     navigate(`/edit-recipe/${recipe.recipeTitle.replace(/\s+/g, '-')}`);
//   };

//   // Récupérer l'utilisateur actuel
//   const currentUser = useSelector(state => state.auth.currentUser);

//   // Vérifier si l'utilisateur est un administrateur
//   const isAdmin = currentUser && currentUser.role === 'admin';

//   if (!recipe) {
//     return <p>Recette non trouvée</p>;
//   }

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const stars = [];
//     for (let i = 1; i <= fullStars; i++) {
//       stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
//     }
//     return stars;
//   };

//   return (
//     <div>
//       <span style={{ fontStyle: 'italic', color: 'gray', marginLeft: '40px' }}>
//         <Link to={`/${recipe.mode}`} style={{ color: 'gray', textDecoration: 'none' }}>
//           Mode{'>'}{recipe.mode}
//         </Link>
//         {' > '}
//         <Link to={`/${recipe.mode}/${recipe.category.replace(/\s+/g, '-')}`} style={{ color: 'gray', textDecoration: 'none' }}>
//           {recipe.category}
//         </Link>
//         {' > '}
//         <Link to={`/${recipe.mode}/${recipe.category.replace(/\s+/g, '-')}/${recipe.recipeTitle.replace(/\s+/g, '-')}`} style={{ color: 'gray', textDecoration: 'none' }}>
//           {recipe.recipeTitle}
//         </Link>
//       </span>
//       <div>
//         <h1 style={{ marginLeft: '40px' }}>{recipe.description}</h1>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%', marginLeft: '0px' }}>
//         <div style={{ color: "#B55D51" }}>
//           <FontAwesomeIcon icon={faUser} /><span> {recipe.author}</span>
//         </div>
//         <div style={{ color: "#B55D51" }}>
//           <FontAwesomeIcon icon={faCalendarAlt} /><span> {recipe.date}</span>
//         </div>
//         <div style={{ color: "#B55D51" }}>
//           <FontAwesomeIcon icon={faComments} /> <span> {recipe.comments.length} comments</span>
//         </div>
//         <div style={{ color: "#B55D51", cursor: 'pointer' }} onClick={handleAddToFavorites}>
//           <FontAwesomeIcon icon={faHeart} /> <span>Save</span>
//         </div>
//         <div style={{ color: "#B55D51" }}>
//           <b>{recipe.rating}</b>
//           {renderStars(recipe.rating)}
//         </div>
//       </div>
//       <div style={{ margin: '0 auto', padding: 0 }}>
//         <div style={{ width: '50%', marginLeft: '20px' }}>
//           <img
//             src={recipe.picture}
//             style={{
//               width: '100%',
//               height: '700px',
//               objectFit: 'contain',
//               borderRadius: '10px'
//             }}
//             alt={recipe.recipeTitle}
//           />
//         </div>
//       </div>

//       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '50%' }}>
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <p style={{ color: 'grey', fontWeight: 'bold' }}>Preparation Time</p>
//           <p style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>{recipe.preparationTime}</p>
//         </div>
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <p style={{ color: 'grey', fontWeight: 'bold' }}>Cooking Time</p>
//           <p style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>{recipe.cookingTime}</p>
//         </div>
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <p style={{ color: 'grey', fontWeight: 'bold' }}>Serving</p>
//           <p style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>{recipe.servings} serving</p>
//         </div>
//       </div>
//       <div>
//         <h2>Nutrition Facts</h2>
//         <ul>
//           <li>Calories: {recipe.nutritionFacts.calories}</li>
//           <li>Protein: {recipe.nutritionFacts.protein}</li>
//           <li>Carbohydrates: {recipe.nutritionFacts.carbohydrates}</li>
//           <li>Fat: {recipe.nutritionFacts.fat}</li>
//         </ul>
//       </div>
//       <div>
//         <h2>Ingredients</h2>
//         <ul>
//           {Object.entries(recipe.ingredients).map(([ingredient, quantity]) => (
//             <li key={ingredient}>
//               <label style={{ textDecoration: checkedIngredients[ingredient] ? 'line-through' : 'none', color: checkedIngredients[ingredient] ? 'gray' : 'black' }}>
//                 <input
//                   type="checkbox"
//                   checked={checkedIngredients[ingredient] || false}
//                   onChange={() => handleCheckboxChange(ingredient)}
//                 />
//                 <span>{quantity}</span> {ingredient}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {isAdmin && (
//         <div style={{ margin: '20px', display: 'flex', gap: '10px' }}>
//           <button
//             onClick={handleEditRecipe}
//             style={{
//               backgroundColor: '#4CAF50',
//               color: 'white',
//               border: 'none',
//               padding: '8px 16px',
//               borderRadius: '5px',
//               cursor: 'pointer',
//             }}
//           >
//             <FontAwesomeIcon icon={faEdit} /> Edit Recipe
//           </button>
//           <button
//             onClick={handleDeleteRecipe}
//             style={{
//               backgroundColor: '#ff4d4d',
//               color: 'white',
//               border: 'none',
//               padding: '8px 16px',
//               borderRadius: '5px',
//               cursor: 'pointer',
//             }}
//           >
//             <FontAwesomeIcon icon={faTrash} /> Delete Recipe
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecipeDetails;



import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faComments, faHeart, faStar, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { addToFavorites } from '../../redux/reducerUser';
import { useNavigate } from 'react-router-dom';
import { removeRecipe } from '../../redux/recepiesReducer';

const RecipeDetails = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipes = useSelector(state => [
    ...state.recipes.normal,
    ...state.recipes.lactoseFree,
    ...state.recipes.dietFriendly,
  ]);

  const recipe = recipes.find(
    r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
  );

  const [checkedIngredients, setCheckedIngredients] = useState({});

  const handleCheckboxChange = (ingredient) => {
    setCheckedIngredients(prevState => ({
      ...prevState,
      [ingredient]: !prevState[ingredient],
    }));
  };

  const handleAddToFavorites = () => {
    if (recipe) {
      dispatch(addToFavorites({ userId: 1, recipe }));
      alert('Recipe added to favorites!');
    }
  };

  const handleDeleteRecipe = () => {
    if (recipe) {
      const isConfirmed = window.confirm('Are you sure you want to delete this recipe?');
      if (isConfirmed) {
        dispatch(removeRecipe({ mode: recipe.mode, id: recipe.id }));
        alert('Recipe deleted successfully!');
        navigate('/');
      }
    }
  };

  const handleEditRecipe = () => {
    navigate(`/edit-recipe/${recipe.recipeTitle.replace(/\s+/g, '-')}`);
  };

  const currentUser = useSelector(state => state.auth.currentUser);
  const isAdmin = currentUser && currentUser.role === 'admin';

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 1; i <= fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
    }
    return stars;
  };
  const renderIngredients = () => {
    if (Array.isArray(recipe.ingredients)) {
      
      return recipe.ingredients.map((ingredient, index) => (
        <li key={index}>
          <label
            style={{
              textDecoration: checkedIngredients[ingredient.name] ? 'line-through' : 'none',
              color: checkedIngredients[ingredient.name] ? 'gray' : 'black',
            }}
          >
            <input
              type="checkbox"
              checked={checkedIngredients[ingredient.name] || false}
              onChange={() => handleCheckboxChange(ingredient.name)}
            />
            <span>{ingredient.value}</span> {ingredient.name}
          </label>
        </li>
      ));
    } else if (typeof recipe.ingredients === 'object') {
     
      return Object.entries(recipe.ingredients || {}).map(([ingredient, quantity], index) => (
        <li key={index}>
          <label
            style={{
              textDecoration: checkedIngredients[ingredient] ? 'line-through' : 'none',
              color: checkedIngredients[ingredient] ? 'gray' : 'black',
            }}
          >
            <input
              type="checkbox"
              checked={checkedIngredients[ingredient] || false}
              onChange={() => handleCheckboxChange(ingredient)}
            />
            <span>{quantity}</span> {ingredient}
          </label>
        </li>
      ));
    } else {
      return <li>No ingredients found.</li>;
    }
  };

  return (
    <div>
      <span style={{ fontStyle: 'italic', color: 'gray', marginLeft: '40px' }}>
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
        <h1 style={{ marginLeft: '40px' }}>{recipe.description}</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '60%', marginLeft: '0px' }}>
        <div style={{ color: '#B55D51' }}>
          <FontAwesomeIcon icon={faUser} />
          <span> {recipe.author}</span>
        </div>
        <div style={{ color: '#B55D51' }}>
          <FontAwesomeIcon icon={faCalendarAlt} />
          <span> {recipe.date}</span>
        </div>
        <div style={{ color: '#B55D51' }}>
          <FontAwesomeIcon icon={faComments} /> <span> {recipe.comments?.length || 0} comments</span>
        </div>
        <div style={{ color: '#B55D51', cursor: 'pointer' }} onClick={handleAddToFavorites}>
          <FontAwesomeIcon icon={faHeart} /> <span>Save</span>
        </div>
        <div style={{ color: '#B55D51' }}>
          <b>{recipe.rating}</b>
          {renderStars(recipe.rating)}
        </div>
      </div>
      <div style={{ margin: '0 auto', padding: 0 }}>
        <div style={{ width: '50%', marginLeft: '20px' }}>
          <img
            src={recipe.picture}
            style={{
              width: '100%',
              height: '700px',
              objectFit: 'contain',
              borderRadius: '10px',
            }}
            alt={recipe.recipeTitle}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '50%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ color: 'grey', fontWeight: 'bold' }}>Preparation Time</p>
          <p style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>{recipe.preparationTime}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ color: 'grey', fontWeight: 'bold' }}>Cooking Time</p>
          <p style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>{recipe.cookingTime}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ color: 'grey', fontWeight: 'bold' }}>Serving</p>
          <p style={{ fontWeight: 'bold', fontSize: '12px', textAlign: 'center' }}>{recipe.servings} serving</p>
        </div>
      </div>
      <div>
      <h2>Nutrition Facts</h2>
        <ul>
          <li>Calories: {recipe.nutritionFacts?.calories || 'N/A'}</li>
          <li>Protein: {recipe.nutritionFacts?.protein || 'N/A'}</li>
          <li>Carbohydrates: {recipe.nutritionFacts?.carbohydrates || 'N/A'}</li>
          <li>Fat: {recipe.nutritionFacts?.fat || 'N/A'}</li>
          </ul>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ul>
          {renderIngredients()}
        </ul>
      </div>
      {isAdmin && (
        <div style={{ margin: '20px', display: 'flex', gap: '10px' }}>
          <button
            onClick={handleEditRecipe}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            <FontAwesomeIcon icon={faEdit} /> Edit Recipe
          </button>
          <button
            onClick={handleDeleteRecipe}
            style={{
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            <FontAwesomeIcon icon={faTrash} /> Delete Recipe
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
