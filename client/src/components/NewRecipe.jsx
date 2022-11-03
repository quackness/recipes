export default function NewRecipe() {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add a new recipe
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Add a new recipe</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label for="add_title">Recipe name</label>
        <input className="form-control" type="text" name="add_title"></input>
        <label for="add_description">Recipe description</label>
        <input className="form-control" type="text" name="add_description"></input>
        <label for="add_picture">Recipe picture</label>
        <input className="form-control" type="url" name="add_picture"></input>
      




      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}