import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import { useState } from 'react';

const ListCard = () => {
  const { normal, lactoseFree, dietFriendly } = useSelector((state) => state.recipes);
  const [mode, setMode] = useState('Normal');

  const getRecipes = () => {
    switch (mode) {
      case 'LactoseFree':
        return lactoseFree;
      case 'DietFriendly':
        return dietFriendly;
      default:
        return normal;
    }
  };

  return (
    <div className="card-container">
      <div>
        <select
          onChange={(e) => setMode(e.target.value)}
          value={mode}
          className="form-control mb-3"
        >
          <option value="Normal">Normal</option>
          <option value="DietFriendly">Diet Friendly</option>
          <option value="LactoseFree">Lactose Free</option>
        </select>
      </div>
      {getRecipes().map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default ListCard;