const express = require('express');
const cors = require('cors');
const pool = require('./db');
const format = require('pg-format');

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
      LEFT JOIN categories ON recipes.category_id = categories.id
      LEFT JOIN recipe_ingredients ON recipe_ingredients.recipe_id = recipes.id
      LEFT JOIN ingredients ON recipe_ingredients.ingredient_id = ingredients.id
      GROUP by categories.name, recipes.id`
    );
    console.log(getAllrecipes.rows)
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

app.get('/ingredients', async (req, res) => {
  try {
    const getAllingredients = await pool.query(
      `SELECT * FROM ingredients;`
    );
    res.json(getAllingredients.rows);
  } catch(err) {
    console.error(err.message)
  }
})






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
    const { title, description, categoryId, picture, ingredients } = req.body;
    console.log("req.body is:", req.body)
    //into recipie ingredients the new recipie id and the posted ingredents
    //insert into recipies
    const newRecipe = await pool.query(
      `INSERT INTO recipes(title, description, category_id, picture)
      VALUES ($1, $2, $3, $4) RETURNING *`, [title, description, categoryId, picture])
    //get recipie id, 
    //what is my new recipie id
    //then insert 
    console.log("rows", newRecipe.rows[0].id)
    const recepieId = newRecipe.rows[0].id;
    console.log("recepieId", recepieId)
    // let ingredients = ingredientId
    const data = ingredients.map(ingredient => {
      return [recepieId, ingredient.id]
    })
    const manyToManyEntry = await pool.query(
      format(`INSERT INTO recipe_ingredients(recipe_id, ingredient_id)
      VALUES %L RETURNING *`, data));
    //build a new object that is the new recipie and return it with ingredients
      newRecipe.rows[0].ingredients = ingredients.map((ingredient) => {
    //creating a new key in the newRecipe object and assigning a value of the array with ingredient.name 
        return ingredient.name
      });
      console.log("rows", newRecipe.rows[0])
      res.json(newRecipe.rows[0]); // res.json(newObject)
  } catch (err) {
    console.error(err.message)
  }
})