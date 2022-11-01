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
      'SELECT categories.name AS category, recipes.id, recipes.title, recipes.description, recipes.category_id, recipes.picture FROM recipes JOIN categories ON recipes.category_id = categories.id'
    );
    res.json(getAllrecipes.rows);
  } catch (err) {
    console.error(err.message)
  }
});