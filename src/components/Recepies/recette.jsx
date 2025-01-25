
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faComments, faHeart, faStar, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { addToFavorites } from '../../redux/Signup/ReducerAuth';
import { useNavigate } from 'react-router-dom';
import { removeRecipe } from '../../redux/recepiesReducer';
import Chemin from './chemin';
import PreparationTime from './prepatime';
import NutritionFacts from './nutritionfacts';
import Instruction from './instruction';
import Ingredients from './ingredients';
import RecipeHeader from './recipeheader';
import CommentForm from './commentaire';
import {  deleteComment, updateComment } from '../../redux/recepiesReducer';
import CommentList from './commentlist'; 

const RecipeDetails = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const recipes = useSelector(state => [
    ...state.recipes.normal,
    ...state.recipes.lactoseFree,
    ...state.recipes.dietFriendly,
  ]);
  const users = useSelector(state => state.auth.users); 
  const [isSaved, setIsSaved] = useState(false);


  const recipe = recipes.find(
    r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
  );
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 1; i <= fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star filled" />);
    }
    return stars;
  };
  const getCommenterUsername = (userId) => {
    const userIdNumber = Number(userId); 
    const user = users.find((user) => user.id === userIdNumber);

    console.log("Found user:", user);
    return user ? user.username : 'User1';
  };
  const commentsWithUsernames = recipe.comments
    ? recipe.comments.map((comment) => ({
        ...comment,
        username: getCommenterUsername(comment.user),
      }))
    : []; 
  const [checkedIngredients, setCheckedIngredients] = useState({});


//-----------------------------------------imane's traitement---------------------------------------------------------------
  const handleAddToFavorites = () => {
    if (!currentUser) {
      navigate('/login'); 
      return;
    }

    if (recipe) {
      dispatch(addToFavorites({ 
        userId: currentUser.id, 
        recipe 
      }));
      setIsSaved(true)
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

 //-------------------------------------------------------------------------------------------------------------------------------
  const isAdmin = currentUser && currentUser.role === 'admin';

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  const handleDeleteComment = (recipeId, commentId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this comment?');
    if (isConfirmed) {
      dispatch(deleteComment({ recipeId, commentId }));
      alert('Comment deleted successfully!');
    }
  };

  const handleUpdateComment = (recipeId, commentId, updatedData) => {
    dispatch(updateComment({ recipeId, commentId, updatedComment: updatedData }));
    alert('Comment updated successfully!');
  };


  return (
    <div>
      <Chemin/>
      <RecipeHeader 
  recipe={recipe}
  isSaved={isSaved}
  onAddToFavorites={handleAddToFavorites}
/>

     
      
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
      <PreparationTime/>
      <NutritionFacts/>
      <Instruction/>
      <Ingredients/>
      <CommentForm recipeId={recipe.id} />
      <h3>Commentaires</h3>
      <CommentList
        comments={commentsWithUsernames}
        currentUser={currentUser}
        isAdmin={isAdmin}
        recipeId={recipe.id}
        onDeleteComment={handleDeleteComment}
        onUpdateComment={handleUpdateComment}
      />
      {/* -------------------------------------------------------------imane's traitement--------------------------------------------------- */}
      {isAdmin &&  (
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
