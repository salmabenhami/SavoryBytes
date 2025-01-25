import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Calcul = () => {
    const { title } = useParams();

    const recipes = useSelector(state => [
        ...state.recipes.normal,
        ...state.recipes.lactoseFree,
        ...state.recipes.dietFriendly,
    ]);

    const recipe = recipes.find(
        r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
    );
    const [newServings, setNewServings] = useState(recipe.servings); 

    const increment = () => setNewServings(prev => prev + 1);

    const decrement = () => setNewServings(prev => (prev > 1 ? prev - 1 : 1));

    if (!recipe) {
        return <p>Recette introuvable</p>;
    }

    const { ingredients, servings } = recipe;

    return (
        <div>
            <h2>{recipe.recipeTitle}</h2>
            <label>
                Ingrédients:
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                        style={buttonStyle}
                        onClick={decrement}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={newServings}
                        min="1"
                        style={inputStyle}
                        readOnly
                    />
                    <button style={buttonStyle} onClick={increment}>
                        +
                    </button>
                </div>
            </label>

            <h3>Ingrédients :</h3>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around', width:'50%'}}>
                {Object.entries(ingredients).map(([ingredient, quantity]) => {
                    const originalQuantity = parseFloat(quantity) || 0;
                    const unit = quantity.replace(originalQuantity, '').trim();
                    const newQuantity = (originalQuantity * newServings) / servings || quantity;
                    return (
                        <>
                            <h4>{ingredient}: {newQuantity} {unit} </h4>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

// Styles internes
const inputStyle = {
    width: '80px',
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
};

const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '0 5px',
};

export default Calcul;
