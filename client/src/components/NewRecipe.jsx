import { useState } from "react";
import axios from "axios";
import Select from "react-select";

export default function NewRecipe(props) {
  const { recipes, categories, setRecipes, ingredients} = props;

  let mappedIngredients = ingredients.map(ingredient => {
    // console.log(ingredient);
    return {value: ingredient.id, label: ingredient.name}
  } )
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(1);
  const [picture, setPicture] = useState("");
  const [ingredientId, setIngredientId] = useState("");

  const submitForm = function(e) {
    e.preventDefault();
    const recipe = {
      title,
      description,
      categoryId,
      picture, 
      ingredientId
    };
    addRecipe(recipe);
    resetForm();
  };

  const addRecipe = function (recipe) {
    console.log("Recipe added:", recipe);
    recipe.ingredients = [{id: 1, name: "hardcoded"}];
    return axios
      .post(`http://localhost:8001/recipes`, recipe)
      .then((response) => {
        const newRecipe = response.data;
        console.log("response.data", response.data);
        console.log("newRec", newRecipe);
        const recipeCategory = categories.find((category) => {
          return category.id === newRecipe.category_id;
        });
        console.log("newRecipe>", newRecipe);
        console.log("category>", recipeCategory);
        newRecipe.name = recipeCategory.name;
        setRecipes([newRecipe, ...recipes]);
      });
  };

  const resetForm = function () {
    setTitle("");
    setDescription("");
    setPicture("");
  };

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add a new recipe
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Add a new recipe
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <label for="add_title">Recipe name</label>
              <input
                className="form-control"
                type="text"
                name="add_title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <label for="add_description">Recipe description</label>
              <input
                className="form-control"
                type="textarea"
                name="add_description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>

              <label for="add_category">Choose a category</label>
              <select
                className="form-control"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <label for="add_picture">Recipe picture</label>
              <input
                className="form-control"
                type="url"
                name="add_picture"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
              ></input>
              <label for="add_ingredient">Ingredients</label>
              <Select
              className="form-control"
              options={mappedIngredients}
              isMulti
              onChange={setIngredientId}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={submitForm}
              >
                Add a recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
