INSERT INTO categories (name)
VALUES 
('Breakfast'),
('Fit'),
('Dessert'),
('Lunch');

INSERT INTO ingredients (name)
VALUES
('Avocado'),
('Egg'),
('Wrap'),
('Salsa'),
('Eggs');


INSERT INTO recipes (title, description, category_id, picture)
VALUES
('Avocado and Egg Breakfast Burrito', 'Great start of your day', 1, 'https://www.allrecipes.com/thmb/EOv7sxOy5owhxlll9Qb9bT6MREY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9198492-e01d21c2706e4d54a06ac9c7d71b7ee8.jpg');

INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
VALUES
(1, 1);


INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
VALUES
(1, 2);

INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
VALUES
(1, 3);


INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
VALUES
(1, 4);

INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
VALUES
(1, 5);
