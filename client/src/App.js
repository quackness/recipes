import './App.css';
import CategoriesList from './components/CategoriesList';
import IngredientsList from './components/IngredientsList';
import Newcategory from './components/NewCategory';
import NewRecipe from './components/NewRecipe';
import NewIngredient from './components/NewIngredient';
import RecipesList from './components/RecipesList';
import { useState, useEffect } from 'react';
import axios from 'axios';

 
function App() {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8001/recipes`)
      .then(function(res) {
        setRecipes([...res.data])
      })
  }, [])

  return (
    <div className="App">
      <RecipesList recipes={recipes}/>
      <CategoriesList />
      <IngredientsList />
      <NewRecipe />
      <Newcategory />
      <NewIngredient />
    </div>
  );
}

export default App;
