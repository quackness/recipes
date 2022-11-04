import axios from "axios";

export default function RecipesList(props) {
  const { recipes, setRecipes } = props;

  const deleteRecipe = function (id) {
    return axios
      .delete(`http://localhost:8001/recipes_delete/${id}`)
      .then((res) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
        console.log("Recipe deleted id:", id);
      });
  };

  return (
    <div>
      Recipes CRUD App
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Description</th>
            <th>Ingredients List</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>
                <img
                  src={recipe.picture}
                  className="rounded float-start img_recipe img-fluid"
                  alt="recipe"
                />
              </td>
              <td>{recipe.title}</td>
              <td>{recipe.description}</td>
              {/* <td>{recipe.ingredients.join(", ")}</td> */}
              <td>
                <button type="button" class="btn btn-success">
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteRecipe(recipe.id)}
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
