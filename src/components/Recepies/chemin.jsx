import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Chemin = () => {
    const { title } = useParams();
  
    const recipes = useSelector(state => [
      ...state.recipes.normal,
      ...state.recipes.lactoseFree,
      ...state.recipes.dietFriendly
    ]);
    const recipe = recipes.find(
        r => r.recipeTitle.toLowerCase().replace(/ /g, '-') === title.toLowerCase()
      );
    return (    
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
    );
}
export default Chemin;