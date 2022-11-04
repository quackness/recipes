const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json()); //req.body
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`App runs on port ${PORT}`);
});

app.get('/recipes', async (req, res) => {
  try {
    const getAllrecipes = await pool.query(
      `SELECT categories.name AS category, recipes.id, recipes.title, recipes.description, recipes.category_id, recipes.picture, array_agg(ingredients.name) AS ingredients
      FROM recipes 
      JOIN categories ON recipes.category_id = categories.id
      JOIN recipe_ingredients ON recipe_ingredients.recipe_id = recipes.id
      JOIN ingredients ON recipe_ingredients.ingredient_id = ingredients.id
      GROUP by categories.name, recipes.id`
    );
    res.json(getAllrecipes.rows);
  } catch (err) {
    console.error(err.message)
  }
});

app.get('/categories', async (req, res) => {
  try {
    const getAllCategories = await pool.query(
      `SELECT * FROM categories;`
    );
    res.json(getAllCategories.rows);
  } catch (err) {
    console.error(err.message)
  }
});


app.delete('/recipes_delete/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    console.log("Deleted recepie id:", id);
    const deleteRecipe = await pool.query(
      `DELETE FROM recipes
      WHERE id = $1 RETURNING *`, [id]
    )
    res.json("deleted")
  } catch (err) {
    console.error(error.message)
  }
});

app.delete('/category_delete/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    console.log("category removed id:", id);
    const deleteCategory = await pool.query(
      `DELETE FROM categories
      WHERE id = $1 RETURNING *`, [id]
    )
    res.json("deleted")
  } catch (err) {
    console.error(err.message)
  }
});


app.post('/recipes', async (req, res) => {
  try {
    const { title, description, categoryId, picture } = req.body;
    console.log("req.body is:", req.body)
 
    const newRecipe = await pool.query(
      `INSERT INTO recipes(title, description, category_id, picture)
      VALUES ($1, $2, $3, $4) RETURNING *`, [title, description, categoryId, picture])
    res.json(newRecipe.rows[0]);
  } catch (err) {
    console.error(err.message)
  }
})