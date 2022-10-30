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
('Eggs'),
('Romaine lettuce'),
('Chicken'),
('Romaine lettuce'),
('Caesars Salad Dressing'),
('Bacon'),
('Parmesan cheese'),
-- ('Eggs'),
('Nutella'),
('Flour');



INSERT INTO recipes (title, description, category_id, picture)
VALUES
('Avocado and Egg Breakfast Burrito', 'Great start of your day', 1, 'https://www.allrecipes.com/thmb/EOv7sxOy5owhxlll9Qb9bT6MREY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9198492-e01d21c2706e4d54a06ac9c7d71b7ee8.jpg'),
('Chicken Caesar Wrap', 'You will love it', 4, 'https://www.allrecipes.com/thmb/n-9lwC-ryMJZLbdZMGlhNGspRdY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9429031-40e45249b737450fb3a84add8a3c275f.jpg'),
('Nutella Brownies', 'Like earth’s layers, they’re a textural masterpiece: crispy-crackly crust, chewy mantle, and rich, fudgy core.', 3, 'https://www.recipetineats.com/wp-content/uploads/2019/01/Nutella-Brownies_4.jpg');


INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(3, 5),
(3, 12),
(3, 13);





-- INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
-- VALUES
-- (1, 2);

-- INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
-- VALUES
-- (1, 3);


-- INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
-- VALUES
-- (1, 4);

-- INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
-- VALUES
-- (1, 5);

-- INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
-- VALUES
-- (2, 6);

-- INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
-- VALUES
-- (2, 7);

-- INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
-- VALUES
-- (2, 8);

-- INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
-- VALUES
-- (2, 9);

-- INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
-- VALUES
-- (2, 10);

-- INSERT INTO recipe_ingredients (recipe_id, ingredient_id)
-- VALUES
-- (2, 11);
