DROP DATABASE IF EXISTS upcs;
CREATE DATABASE upcs;

CREATE TABLE upcs (
  ID SERIAL PRIMARY KEY,
  product_name VARCHAR,
  upc VARCHAR
);

INSERT INTO upcs (product_name, upc)
VALUES 
  ('Lacroix Tangerine', '24463061163'),
  ('ABC Sparkling water', '52000328660'),
  ('Lukes cheddar chips', '84114112729');
