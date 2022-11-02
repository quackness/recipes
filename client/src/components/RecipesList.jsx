export default function RecipesList(props) {

  const {recipes} = props;

  return (
    <>
    <div>
      Recipes List:
      <table className="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Ingredients List</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => 
           <tr key={recipe.id}>
          <td><img src={recipe.picture} className="rounded float-start img_recipe img-fluid" alt="recipe" /></td>
          <td>{recipe.title}</td>
          <td>{recipe.ingredients.toString()}</td>
          <td>{recipe.description}</td>
          <td>Edit button</td>
          <td>Delete button</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
}
