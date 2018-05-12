# mycle

The purpose of this app is to create a webpage that is based on one database with two tables.

A static table that contains information relating to attractions around Cleveland.
An updatable table for user review submissions.

When a user loads the webpage they will see a navbar allowing them to travel to the different categories and the top X results for most popular attractions.

Each attraction will have a clickable title to route the user to it's individual page, a brief desciption, a picture, a like button that will increment the attraction in the table, and a submit review button that will be tied to a table that will be associated with each attractions unique ID.

Each category page will link to an API route /api/:category, to show all elements in that category. Each individual page will similarly have a route /api/:attraction. Included in the individual page will be a google-maps feature to show the attractions location and possibly get directions as well as a list of user reviews for the attraction.