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