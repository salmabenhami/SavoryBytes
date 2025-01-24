// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDropzone } from 'react-dropzone';
// import { useNavigate } from 'react-router-dom';
// import { addRecipe } from '../../redux/recepiesReducer';
// import "../../styles/FormsRecipes.css"
// const AddRecipeForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const recipes = useSelector((state) => state.recipes); 

//   const [formData, setFormData] = useState({
//     id: '', 
//     recipeTitle: '',
//     description: '',
//     mode: 'Normal',
//     category: 'Main Course',
//     preparationTime: '',
//     cookingTime: '',
//     servings: 1,
//     difficultyLevel: 'Easy',
//     author: '',
//     picture: null,
//     ingredients: [{ name: '', quantity: '' }],
//     preparationSteps: [''],
//     nutritionFacts: [{ name: '', value: '' }],
//   });

//   const [error, setError] = useState('');

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const fileUrl = URL.createObjectURL(file);
//     setFormData((prevState) => ({
//       ...prevState,
//       picture: fileUrl,
//     }));
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: 'image/*',
//   });

//   const isIdUnique = (id) => {
//     const allRecipes = [...recipes.normal, ...recipes.lactoseFree, ...recipes.dietFriendly];
//     return !allRecipes.some((recipe) => recipe.id === id);
//   };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };


//   const handleIngredientChange = (index, field, value) => {
//     const updatedIngredients = [...formData.ingredients];
//     updatedIngredients[index][field] = value;
//     setFormData({ ...formData, ingredients: updatedIngredients });
//   };

//   const addIngredient = () => {
//     setFormData({
//       ...formData,
//       ingredients: [...formData.ingredients, { name: '', quantity: '' }],
//     });
//   };

//   const removeIngredient = (index) => {
//     const updatedIngredients = formData.ingredients.filter((_, i) => i !== index);
//     setFormData({ ...formData, ingredients: updatedIngredients });
//   };

//   const handleStepChange = (index, value) => {
//     const updatedSteps = [...formData.preparationSteps];
//     updatedSteps[index] = value;
//     setFormData({ ...formData, preparationSteps: updatedSteps });
//   };

//   const addStep = () => {
//     setFormData({
//       ...formData,
//       preparationSteps: [...formData.preparationSteps, ''],
//     });
//   };


//   const removeStep = (index) => {
//     const updatedSteps = formData.preparationSteps.filter((_, i) => i !== index);
//     setFormData({ ...formData, preparationSteps: updatedSteps });
//   };


//   const handleNutritionChange = (index, field, value) => {
//     const updatedNutritionFacts = [...formData.nutritionFacts];
//     updatedNutritionFacts[index][field] = value;
//     setFormData({ ...formData, nutritionFacts: updatedNutritionFacts });
//   };

//   const addNutritionFact = () => {
//     setFormData({
//       ...formData,
//       nutritionFacts: [...formData.nutritionFacts, { name: '', value: '' }],
//     });
//   };

//   const removeNutritionFact = (index) => {
//     const updatedNutritionFacts = formData.nutritionFacts.filter((_, i) => i !== index);
//     setFormData({ ...formData, nutritionFacts: updatedNutritionFacts });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.id) {
//       setError('ID is required.');
//       return;
//     }

//     if (!isIdUnique(formData.id)) {
//       setError('ID must be unique.');
//       return;
//     }
//     const today = new Date().toLocaleDateString();
//     const newRecipeData = { ...formData, date: today, mode: formData.mode };
//     console.log('Recette soumise :', newRecipeData); 
//     dispatch(addRecipe({ mode: formData.mode, recipe: newRecipeData }));
//     setFormData({
//       id: '',
//       recipeTitle: '',
//       description: '',
//       mode: 'Normal',
//       category: 'Main Course',
//       preparationTime: '',
//       cookingTime: '',
//       servings: 1,
//       difficultyLevel: 'Easy',
//       author: '',
//       picture: null,
//       ingredients: [{ name: '', quantity: '' }],
//       preparationSteps: [''],
//       nutritionFacts: [{ name: '', value: '' }],
//     });

//     setError(''); 
//     navigate('/ListCard');
//   };


//   return (
//     <form onSubmit={handleSubmit} className="add-recipe-form-container">
//       <h2>Add New Recipe</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
  
//       <div className="mb-3">
//         <label className="form-label">Recipe ID</label>
//         <input
//           type="text"
//           name="id"
//           value={formData.id}
//           onChange={(e) => setFormData({ ...formData, id: e.target.value })}
//           className="form-control"
//           placeholder="Unique Recipe ID"
//           required
//         />
//       </div>
  
//       <div className="mb-3">
//         <label className="form-label">Recipe Title</label>
//         <input
//           type="text"
//           name="recipeTitle"
//           value={formData.recipeTitle}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>
  
//       <div className="mb-3">
//         <label className="form-label">Description</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>
  
//       <div className="mb-3">
//         <label className="form-label">Author</label>
//         <input
//           type="text"
//           name="author"
//           value={formData.author}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>
  
//       <div className="mb-3">
//         <label className="form-label">Preparation Time (minutes)</label>
//         <input
//           type="number"
//           name="preparationTime"
//           value={formData.preparationTime}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>
  
//       <div className="mb-3">
//         <label className="form-label">Cooking Time (minutes)</label>
//         <input
//           type="number"
//           name="cookingTime"
//           value={formData.cookingTime}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>
  
//       <div className="mb-3">
//         <label className="form-label">Category</label>
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           className="form-control"
//           required
//         >
//           <option>Main Course</option>
//           <option>Appetizer</option>
//           <option>Salad</option>
//           <option>Soup</option>
//           <option>Dessert</option>
//         </select>
//       </div>
  
//       <div className="mb-3">
//         <label className="form-label">Mode</label>
//         <select
//           name="mode"
//           value={formData.mode}
//           onChange={handleChange}
//           className="form-control"
//           required
//         >
//           <option>Normal</option>
//           <option>DietFriendly</option>
//           <option>LactoseFree</option>
//         </select>
//       </div>
  
//       <div className="mb-3">
//         <label className="form-label">Difficulty Level</label>
//         <select
//           name="difficultyLevel"
//           value={formData.difficultyLevel}
//           onChange={handleChange}
//           className="form-control"
//           required
//         >
//           <option>Easy</option>
//           <option>Medium</option>
//           <option>Hard</option>
//         </select>
//       </div>
  
//       <div className="mb-3">
//         <label className="form-label">Servings</label>
//         <input
//           type="number"
//           name="servings"
//           value={formData.servings}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>
  
//       {/* <div className="mb-3">
//         <label className="form-label">Picture</label>
//         <div
//           {...getRootProps()}
//           className={`border p-4 text-center rounded ${
//             isDragActive ? 'bg-light' : ''
//           }`}
//           style={{ cursor: 'pointer' }}
//         >
//           <input {...getInputProps()} />
//           {formData.picture ? (
//             <div>
//               <img
//                 src={formData.picture}
//                 alt="Preview"
//                 className="img-fluid mb-3"
//                 style={{ maxHeight: '200px', objectFit: 'cover' }}
//               />
//               <p>Drag a new image or click to replace</p>
//             </div>
//           ) : (
//             <p>Drag & drop an image here, or click to select one</p>
//           )}
//         </div>
//       </div> */}
//       <div className="mb-3">
//   <label className="form-label">Picture</label>
//   <div
//     {...getRootProps()}
//     className={`dropzone ${isDragActive ? 'dragover' : ''}`} // Appliquer les styles CSS
//   >
//     <input {...getInputProps()} />
//     {formData.picture ? (
//       <div>
//         <img
//           src={formData.picture}
//           alt="Preview"
//           className="uploaded-image" // Appliquer les styles CSS pour l'image
//         />
//         <p>Drag a new image or click to replace</p>
//       </div>
//     ) : (
//       <p>Drag & drop an image here, or click to select one</p>
//     )}
//   </div>
// </div>
//       <div className="mb-3">
//         <label className="form-label">Ingredients</label>
//         {formData.ingredients.map((ingredient, index) => (
//           <>
//           <div key={index} className="ingredient-row">
//             <input
//               type="text"
//               placeholder="Ingredient Name"
//               value={ingredient.name}
//               onChange={(e) =>
//                 handleIngredientChange(index, 'name', e.target.value)
//               }
//               className="form-control"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Quantity"
//               value={ingredient.quantity}
//               onChange={(e) =>
//                 handleIngredientChange(index, 'quantity', e.target.value)
//               }
//               className="form-control"
//               required
//             />
//             <div>
//             <button
//               type="button"
//               className="btn btn-danger"  
//               onClick={() => removeIngredient(index)}
//             >
//               Remove
//             </button>
//             </div>
//           </div>
    
//           </>
//         ))}
      
//       </div>
//       <button type="button" className="btn btn-add" onClick={addIngredient}>
//           Add Ingredient
//         </button>
//       <div className="mb-3">
//         <label className="form-label">Preparation Steps</label>
//         {formData.preparationSteps.map((step, index) => (
          
//           <div key={index} className="step-row">
//             <textarea
//               value={step}
//               onChange={(e) => handleStepChange(index, e.target.value)}
//               className="form-control"
//               required
//             />
//             <div className="button-group">
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 onClick={() => removeStep(index)}
//               >
//                 Remove
//               </button>
           
//             </div>
         
//             </div>
          
//         ))}
//         </div>
//              <button
//              type="button"
//              className="btn btn-add"
//              onClick={addStep}
//            >
//              Add Preparation Step
//            </button>
        
 

//       <div className="mb-3">
//         <label className="form-label">Nutrition Facts</label>
//         {formData.nutritionFacts.map((fact, index) => (
//           <>
//           <div key={index} className="nutrition-row">
//             <input
//               type="text"
//               placeholder="Fact Name"
//               value={fact.name}
//               onChange={(e) =>
//                 handleNutritionChange(index, 'name', e.target.value)
//               }
//               className="form-control"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Value"
//               value={fact.value}
//               onChange={(e) =>
//                 handleNutritionChange(index, 'value', e.target.value)
//               }
//               className="form-control"
//               required
//             />
//             <div>
//             <button
//               type="button"
//               className="btn btn-danger"
//               onClick={() => removeNutritionFact(index)} 
//             >
//               Remove
//             </button>
//             </div>
           
//           </div>
      
//           </>
//         ))}
//         <button
//           type="button"
//           className="btn btn-add"
//           onClick={addNutritionFact}
//         >
//           Add Nutrition Fact
//         </button>
//       </div>
  
//       <button type="submit" className="btn btn-submit">
//         Submit Recipe
//       </button>
//     </form>
//   );
// };

// export default AddRecipeForm;


// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDropzone } from 'react-dropzone';
// import { useNavigate } from 'react-router-dom';
// import { addRecipe } from '../../redux/recepiesReducer';
// import "../../styles/FormsRecipes.css";

// const AddRecipeForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const recipes = useSelector((state) => state.recipes);

//   const [formData, setFormData] = useState({
//     id: '',
//     recipeTitle: '',
//     description: '',
//     mode: 'Normal',
//     category: 'Main Course',
//     preparationTime: '',
//     cookingTime: '',
//     servings: 1,
//     difficultyLevel: 'Easy',
//     author: '',
//     picture: null,
//     ingredients: [{ name: '', quantity: '' }],
//     preparationSteps: [''],
//     nutritionFacts: {
//       calories: '',
//       protein: '',
//       carbohydrates: '',
//       fat: ''
//     },
//   });

//   const [error, setError] = useState('');

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const fileUrl = URL.createObjectURL(file);
//     setFormData((prevState) => ({
//       ...prevState,
//       picture: fileUrl,
//     }));
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: 'image/*',
//   });

//   const isIdUnique = (id) => {
//     const allRecipes = [...recipes.normal, ...recipes.lactoseFree, ...recipes.dietFriendly];
//     return !allRecipes.some((recipe) => recipe.id === id);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // const handleIngredientChange = (index, field, value) => {
//   //   const updatedIngredients = [...formData.ingredients];
//   //   updatedIngredients[index][field] = value;
//   //   setFormData({ ...formData, ingredients: updatedIngredients });
//   // };

//   // const addIngredient = () => {
//   //   setFormData({
//   //     ...formData,
//   //     ingredients: [...formData.ingredients, { name: '', quantity: '' }],
//   //   });
//   // };

//   // const removeIngredient = (index) => {
//   //   const updatedIngredients = formData.ingredients.filter((_, i) => i !== index);
//   //   setFormData({ ...formData, ingredients: updatedIngredients });
//   // };
//   const handleIngredientChange = (ingredientName, quantity) => {
//     setFormData({
//       ...formData,
//       ingredients: {
//         ...formData.ingredients,
//         [ingredientName]: quantity,
//       },
//     });
//   };

//   const addIngredient = () => {
//     setFormData({
//       ...formData,
//       ingredients: {
//         ...formData.ingredients,
//         '': '', // Add a new empty ingredient
//       },
//     });
//   };

//   const removeIngredient = (ingredientName) => {
//     const updatedIngredients = { ...formData.ingredients };
//     delete updatedIngredients[ingredientName];
//     setFormData({
//       ...formData,
//       ingredients: updatedIngredients,
//     });
//   };


//   const handleStepChange = (index, value) => {
//     const updatedSteps = [...formData.preparationSteps];
//     updatedSteps[index] = value;
//     setFormData({ ...formData, preparationSteps: updatedSteps });
//   };

//   const addStep = () => {
//     setFormData({
//       ...formData,
//       preparationSteps: [...formData.preparationSteps, ''],
//     });
//   };

//   const removeStep = (index) => {
//     const updatedSteps = formData.preparationSteps.filter((_, i) => i !== index);
//     setFormData({ ...formData, preparationSteps: updatedSteps });
//   };

//   const handleNutritionChange = (field, value) => {
//     setFormData({
//       ...formData,
//       nutritionFacts: {
//         ...formData.nutritionFacts,
//         [field]: value,
//       },
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.id) {
//       setError('ID is required.');
//       return;
//     }

//     if (!isIdUnique(formData.id)) {
//       setError('ID must be unique.');
//       return;
//     }

//     const today = new Date().toLocaleDateString();
//     const newRecipeData = { ...formData, date: today, mode: formData.mode };
//     console.log('Recette soumise :', newRecipeData);
//     dispatch(addRecipe({ mode: formData.mode, recipe: newRecipeData }));
//     setFormData({
//       id: '',
//       recipeTitle: '',
//       description: '',
//       mode: 'Normal',
//       category: 'Main Course',
//       preparationTime: '',
//       cookingTime: '',
//       servings: 1,
//       difficultyLevel: 'Easy',
//       author: '',
//       picture: null,
//       ingredients: {},
//       preparationSteps: [''],
//       nutritionFacts: {
//         calories: '',
//         protein: '',
//         carbohydrates: '',
//         fat: ''
//       },
//     });

//     setError('');
//     navigate('/ListCard');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="add-recipe-form-container">
//       <h2>Add New Recipe</h2>
//       {error && <div className="alert alert-danger">{error}</div>}

//       <div className="mb-3">
//         <label className="form-label">Recipe ID</label>
//         <input
//           type="text"
//           name="id"
//           value={formData.id}
//           onChange={(e) => setFormData({ ...formData, id: e.target.value })}
//           className="form-control"
//           placeholder="Unique Recipe ID"
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Recipe Title</label>
//         <input
//           type="text"
//           name="recipeTitle"
//           value={formData.recipeTitle}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Description</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Author</label>
//         <input
//           type="text"
//           name="author"
//           value={formData.author}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Preparation Time (minutes)</label>
//         <input
//           type="number"
//           name="preparationTime"
//           value={formData.preparationTime}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Cooking Time (minutes)</label>
//         <input
//           type="number"
//           name="cookingTime"
//           value={formData.cookingTime}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Category</label>
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           className="form-control"
//           required
//         >
//           <option>Main Course</option>
//           <option>Appetizer</option>
//           <option>Salad</option>
//           <option>Soup</option>
//           <option>Dessert</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Mode</label>
//         <select
//           name="mode"
//           value={formData.mode}
//           onChange={handleChange}
//           className="form-control"
//           required
//         >
//           <option>Normal</option>
//           <option>DietFriendly</option>
//           <option>LactoseFree</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Difficulty Level</label>
//         <select
//           name="difficultyLevel"
//           value={formData.difficultyLevel}
//           onChange={handleChange}
//           className="form-control"
//           required
//         >
//           <option>Easy</option>
//           <option>Medium</option>
//           <option>Hard</option>
//         </select>
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Servings</label>
//         <input
//           type="number"
//           name="servings"
//           value={formData.servings}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Picture</label>
//         <div
//           {...getRootProps()}
//           className={`dropzone ${isDragActive ? 'dragover' : ''}`}
//         >
//           <input {...getInputProps()} />
//           {formData.picture ? (
//             <div>
//               <img
//                 src={formData.picture}
//                 alt="Preview"
//                 className="uploaded-image"
//               />
//               <p>Drag a new image or click to replace</p>
//             </div>
//           ) : (
//             <p>Drag & drop an image here, or click to select one</p>
//           )}
//         </div>
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Ingredients</label>
//         {Object.entries(formData.ingredients).map(([ingredientName, quantity], index) => (
//           <div key={index} className="ingredient-row">
//             <input
//               type="text"
//               placeholder="Ingredient Name"
//               value={ingredientName}
//               onChange={(e) => {
//                 const newIngredients = { ...formData.ingredients };
//                 delete newIngredients[ingredientName]; // Remove the old key
//                 newIngredients[e.target.value] = quantity; // Add the new key
//                 setFormData({
//                   ...formData,
//                   ingredients: newIngredients,
//                 });
//               }}
//               className="form-control"
//               required
//             />
//             <input
//               type="text"
//               placeholder="Quantity"
//               value={quantity}
//               onChange={(e) =>
//                 handleIngredientChange(ingredientName, e.target.value)
//               }
//               className="form-control"
//               required
//             />
//             <button
//               type="button"
//               className="btn btn-danger"
//               onClick={() => removeIngredient(ingredientName)}
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//             <button type="button" className="btn btn-add" onClick={addIngredient}>
//           Add Ingredient
//         </button>
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Preparation Steps</label>
//         {formData.preparationSteps.map((step, index) => (
//           <div key={index} className="step-row">
//             <textarea
//               value={step}
//               onChange={(e) => handleStepChange(index, e.target.value)}
//               className="form-control"
//               required
//             />
//             <button
//               type="button"
//               className="btn btn-danger"
//               onClick={() => removeStep(index)}
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button type="button" className="btn btn-add" onClick={addStep}>
//           Add Preparation Step
//         </button>
//       </div>

//       <div className="mb-3">
//         <label className="form-label">Nutrition Facts</label>
//         <div className="nutrition-row">
//           <input
//             type="text"
//             placeholder="Calories"
//             value={formData.nutritionFacts.calories}
//             onChange={(e) => handleNutritionChange('calories', e.target.value)}
//             className="form-control"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Protein"
//             value={formData.nutritionFacts.protein}
//             onChange={(e) => handleNutritionChange('protein', e.target.value)}
//             className="form-control"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Carbohydrates"
//             value={formData.nutritionFacts.carbohydrates}
//             onChange={(e) => handleNutritionChange('carbohydrates', e.target.value)}
//             className="form-control"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Fat"
//             value={formData.nutritionFacts.fat}
//             onChange={(e) => handleNutritionChange('fat', e.target.value)}
//             className="form-control"
//             required
//           />
//         </div>
//       </div>

//       <button type="submit" className="btn btn-submit">
//         Submit Recipe
//       </button>
//     </form>
//   );
// };

// export default AddRecipeForm;




import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../../redux/recepiesReducer';
import "../../styles/FormsRecipes.css";

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recipes = useSelector((state) => state.recipes);

  const [formData, setFormData] = useState({
    id: '',
    recipeTitle: '',
    description: '',
    mode: 'Normal',
    category: 'Main Course',
    preparationTime: '',
    cookingTime: '',
    servings: 1,
    difficultyLevel: 'Easy',
    author: '',
    picture: null,
    ingredients: {}, // Ingredients as an object
    preparationSteps: [''], // Preparation steps as an array
    nutritionFacts: {
      calories: '',
      protein: '',
      carbohydrates: '',
      fat: ''
    },
  });

  const [error, setError] = useState('');

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setFormData((prevState) => ({
      ...prevState,
      picture: fileUrl,
    }));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const isIdUnique = (id) => {
    const allRecipes = [...recipes.normal, ...recipes.lactoseFree, ...recipes.dietFriendly];
    return !allRecipes.some((recipe) => recipe.id === id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIngredientChange = (ingredientName, quantity) => {
    setFormData({
      ...formData,
      ingredients: {
        ...formData.ingredients,
        [ingredientName]: quantity,
      },
    });
  };

  const addIngredient = () => {
    setFormData({
      ...formData,
      ingredients: {
        ...formData.ingredients,
        '': '', // Add a new empty ingredient
      },
    });
  };

  const removeIngredient = (ingredientName) => {
    const updatedIngredients = { ...formData.ingredients };
    delete updatedIngredients[ingredientName];
    setFormData({
      ...formData,
      ingredients: updatedIngredients,
    });
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = [...formData.preparationSteps];
    updatedSteps[index] = value;
    setFormData({ ...formData, preparationSteps: updatedSteps });
  };

  const addStep = () => {
    setFormData({
      ...formData,
      preparationSteps: [...formData.preparationSteps, ''],
    });
  };

  const removeStep = (index) => {
    const updatedSteps = formData.preparationSteps.filter((_, i) => i !== index);
    setFormData({ ...formData, preparationSteps: updatedSteps });
  };

  const handleNutritionChange = (field, value) => {
    setFormData({
      ...formData,
      nutritionFacts: {
        ...formData.nutritionFacts,
        [field]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.id) {
      setError('ID is required.');
      return;
    }

    if (!isIdUnique(formData.id)) {
      setError('ID must be unique.');
      return;
    }

    const today = new Date().toLocaleDateString();
    const newRecipeData = { ...formData, date: today, mode: formData.mode };
    console.log('Recette soumise :', newRecipeData);
    dispatch(addRecipe({ mode: formData.mode, recipe: newRecipeData }));
    setFormData({
      id: '',
      recipeTitle: '',
      description: '',
      mode: 'Normal',
      category: 'Main Course',
      preparationTime: '',
      cookingTime: '',
      servings: 1,
      difficultyLevel: 'Easy',
      author: '',
      picture: null,
      ingredients: {}, // Reset ingredients to an empty object
      preparationSteps: [''], // Reset preparation steps to an empty array
      nutritionFacts: {
        calories: '',
        protein: '',
        carbohydrates: '',
        fat: ''
      },
    });

    setError('');
    navigate('/ListCard');
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form-container">
      <h2>Add New Recipe</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Recipe ID */}
      <div className="mb-3">
        <label className="form-label">Recipe ID</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          className="form-control"
          placeholder="Unique Recipe ID"
          required
        />
      </div>

      {/* Recipe Title */}
      <div className="mb-3">
        <label className="form-label">Recipe Title</label>
        <input
          type="text"
          name="recipeTitle"
          value={formData.recipeTitle}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      {/* Author */}
      <div className="mb-3">
        <label className="form-label">Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      {/* Preparation Time */}
      <div className="mb-3">
        <label className="form-label">Preparation Time (minutes)</label>
        <input
          type="number"
          name="preparationTime"
          value={formData.preparationTime}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      {/* Cooking Time */}
      <div className="mb-3">
        <label className="form-label">Cooking Time (minutes)</label>
        <input
          type="number"
          name="cookingTime"
          value={formData.cookingTime}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      {/* Category */}
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-control"
          required
        >
          <option>Main Course</option>
          <option>Appetizer</option>
          <option>Salad</option>
          <option>Soup</option>
          <option>Dessert</option>
        </select>
      </div>

      {/* Mode */}
      <div className="mb-3">
        <label className="form-label">Mode</label>
        <select
          name="mode"
          value={formData.mode}
          onChange={handleChange}
          className="form-control"
          required
        >
          <option>Normal</option>
          <option>DietFriendly</option>
          <option>LactoseFree</option>
        </select>
      </div>

      {/* Difficulty Level */}
      <div className="mb-3">
        <label className="form-label">Difficulty Level</label>
        <select
          name="difficultyLevel"
          value={formData.difficultyLevel}
          onChange={handleChange}
          className="form-control"
          required
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      {/* Servings */}
      <div className="mb-3">
        <label className="form-label">Servings</label>
        <input
          type="number"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      {/* Picture Upload */}
      <div className="mb-3">
        <label className="form-label">Picture</label>
        <div
          {...getRootProps()}
          className={`dropzone ${isDragActive ? 'dragover' : ''}`}
        >
          <input {...getInputProps()} />
          {formData.picture ? (
            <div>
              <img
                src={formData.picture}
                alt="Preview"
                className="uploaded-image"
              />
              <p>Drag a new image or click to replace</p>
            </div>
          ) : (
            <p>Drag & drop an image here, or click to select one</p>
          )}
        </div>
      </div>

      {/* Ingredients */}
      <div className="mb-3">
        <label className="form-label">Ingredients</label>
        {Object.entries(formData.ingredients).map(([ingredientName, quantity], index) => (
          <div key={index} className="ingredient-row">
            <input
              type="text"
              placeholder="Ingredient Name"
              value={ingredientName}
              onChange={(e) => {
                const newIngredients = { ...formData.ingredients };
                delete newIngredients[ingredientName]; // Remove the old key
                newIngredients[e.target.value] = quantity; // Add the new key
                setFormData({
                  ...formData,
                  ingredients: newIngredients,
                });
              }}
              className="form-control"
              required
            />
            <input
              type="text"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) =>
                handleIngredientChange(ingredientName, e.target.value)
              }
              className="form-control"
              required
            />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeIngredient(ingredientName)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" className="btn btn-add" onClick={addIngredient}>
          Add Ingredient
        </button>
      </div>

      {/* Preparation Steps */}
      <div className="mb-3">
        <label className="form-label">Preparation Steps</label>
        {formData.preparationSteps.map((step, index) => (
          <div key={index} className="step-row">
            <textarea
              value={step}
              onChange={(e) => handleStepChange(index, e.target.value)}
              className="form-control"
              required
            />
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => removeStep(index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" className="btn btn-add" onClick={addStep}>
          Add Preparation Step
        </button>
      </div>

      {/* Nutrition Facts */}
      <div className="mb-3">
        <label className="form-label">Nutrition Facts</label>
        <div className="nutrition-row">
          <input
            type="text"
            placeholder="Calories"
            value={formData.nutritionFacts.calories}
            onChange={(e) => handleNutritionChange('calories', e.target.value)}
            className="form-control"
            required
          />
          <input
            type="text"
            placeholder="Protein"
            value={formData.nutritionFacts.protein}
            onChange={(e) => handleNutritionChange('protein', e.target.value)}
            className="form-control"
            required
          />
          <input
            type="text"
            placeholder="Carbohydrates"
            value={formData.nutritionFacts.carbohydrates}
            onChange={(e) => handleNutritionChange('carbohydrates', e.target.value)}
            className="form-control"
            required
          />
          <input
            type="text"
            placeholder="Fat"
            value={formData.nutritionFacts.fat}
            onChange={(e) => handleNutritionChange('fat', e.target.value)}
            className="form-control"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-submit">
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
