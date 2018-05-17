USE mycle_db;

-- INSERT INTO locations (name, description, adress, picture_url) VALUES("Test 2", "Another Location", "Such and Such Drive, Lakewood", "route here");

UPDATE locations SET category="nightlife" WHERE id=1;
UPDATE locations SET category="restaurant" WHERE id=2;

SELECT * FROM locations;