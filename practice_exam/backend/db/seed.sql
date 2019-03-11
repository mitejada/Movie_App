DROP DATABASE IF EXISTS review_me;
CREATE DATABASE review_me;

\c review_me;

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  genre_id INT REFERENCES genres(id) ON DELETE CASCADE,
  img_url VARCHAR NOT NULL
);


CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  stars_rating INT,
  movieRating_id INT REFERENCES movies(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comments_text VARCHAR NOT NULL,
  movie_id INT REFERENCES movies(id) ON DELETE CASCADE
);
