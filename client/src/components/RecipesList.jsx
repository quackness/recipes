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
           <tr>
          <td>{recipe.picture}</td>
          <td>{recipe.title}</td>
          <td>{recipe.ingredients}</td>
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
