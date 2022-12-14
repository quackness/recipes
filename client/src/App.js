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
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients]= useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8001/recipes`)
      .then(function(res) {
        setRecipes([...res.data])
        setIngredients([...res.data])
      })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:8001/categories`)
      .then(function(res) {
        setCategories([...res.data])
      })
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:8001/ingredients`)
      .then(function(res) {
        setIngredients([...res.data])
      })
  }, [])


  return (
    <div className="App">
      <RecipesList recipes={recipes} setRecipes={setRecipes}/>
      <CategoriesList categories={categories} setCategories={setCategories}/>
      <NewRecipe recipes={recipes} setRecipes={setRecipes} categories={categories} loadedIngredients={ingredients}/>
      <Newcategory />
    </div>
  );
}

export default App;
