// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromFavorites } from '../../redux/reducerUser'; // Import the action

// const Favorites = () => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.users.currentUser?.favorites || []);

//   // Function to handle removing a recipe from favorites
//   const handleRemoveFavorite = (recipeTitle) => {
//     dispatch(removeFromFavorites({ userId: 1, recipeTitle })); // Dispatch the action
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>My Favorite Recipes</h1>
//       {favorites.length === 0 ? (
//         <p>You have no favorite recipes yet.</p>
//       ) : (
//         <div>
//           {favorites.map((recipe) => (
//             <div key={recipe.recipeTitle} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
//               <h2>{recipe.recipeTitle}</h2>
//               <img 
//                 src={recipe.picture} 
//                 alt={recipe.recipeTitle} 
//                 style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '10px' }} 
//               />
//               <p>{recipe.description}</p>
//               <p><strong>Author:</strong> {recipe.author}</p>
//               <p><strong>Rating:</strong> {recipe.rating}</p>
//               <button 
//                 onClick={() => handleRemoveFavorite(recipe.recipeTitle)}
//                 style={{
//                   backgroundColor: '#ff4d4d',
//                   color: 'white',
//                   border: 'none',
//                   padding: '8px 16px',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                 }}
//               >
//                 Remove from Favorites
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Favorites;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../redux/reducerUser'; // Import the action
import Card from './Card'; // Import the Card component

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.users.currentUser?.favorites || []);

  // Function to handle removing a recipe from favorites
  const handleRemoveFavorite = (recipeTitle) => {
    dispatch(removeFromFavorites({ userId: 1, recipeTitle })); // Dispatch the action
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite recipes yet.</p>
      ) : (
        <div>
          {favorites.map((recipe) => (
            <div key={recipe.recipeTitle} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <div>
                <Card recipe={recipe} />
              </div>
              <div>
                <button 
                  onClick={() => handleRemoveFavorite(recipe.recipeTitle)}
                  style={{
                    backgroundColor: '#ff4d4d',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    marginTop:'5%',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;