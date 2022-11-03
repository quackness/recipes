import axios from "axios";

export default function CategoriesList(props) {
  const { categories, setCategories } = props;

  // const deleteCategory = function (id) {
  //   return axios.delete(`http://localhost:8001/category_delete/${id}`)
  //       .then(res => {
  //       setCategories(categories.filter(category => category.id !== id));
  //       console.log("Category deleted id:", id);
  //     });
  // };

  const deleteCategory = function(id) {
    return axios.delete(`http://localhost:8001/category_delete/${id}`)
      .then(res => {
        setCategories(categories.filter(category => category.id !== id))
        console.log("Category deleted id:", id)
      })
  }

  // const deleteRecipe = function(id) {
  //   return axios.delete(`http://localhost:8001/recipes_delete/${id}`)
  //     .then(res => {
  //       setRecipes(recipes.filter(recipe => recipe.id !== id))
  //       console.log("Recipe deleted id:", id)
  //     })
  // }







  return (
    <div>
      Categories list table
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Category name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <button type="button" className="btn btn-success">
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteCategory(category.id)}
                >
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
