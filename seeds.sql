USE mycle_db;

-- INSERT INTO locations (name, description, adress, picture_url) VALUES("Test 2", "Another Location", "Such and Such Drive, Lakewood", "route here");

UPDATE locations SET picture_url="/img/brasaGrill.jpg" WHERE id=1;

SELECT * FROM locations;