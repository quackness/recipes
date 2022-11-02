export default function CategoriesList(props) {
  const { categories } = props;
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
          {categories.map(category => 
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>Edit button</td>
              <td>Delete button</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
