import './App.css';
import CategoriesList from './components/CategoriesList';
import IngredientsList from './components/IngredientsList';
import Newcategory from './components/NewCategory';
import NewRecipe from './components/NewRecipe';
import NewIngredient from './components/NewIngredient';
import RecipesList from './components/RecipesList';


function App() {
  return (
    <div className="App">
      <RecipesList />
      <CategoriesList />
      <IngredientsList />
      <NewRecipe />
      <Newcategory />
      <NewIngredient />
    </div>
  );
}

export default App;
