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
  movieRating_id INT REFERENCES movies(id) ON DELETE CASCADE,
  stars_rating INT
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comments_text VARCHAR NOT NULL,
  movie_id INT REFERENCES movies(id) ON DELETE CASCADE
);


INSERT INTO genres (name)
VALUES ('Horror'), ('Comedy'), ('Adventure'), ('Action'), ('Thriller');

INSERT INTO movies (title, genre_id, img_url)
VALUES ('Saw', 1, 'https://earofnewtdotcom.files.wordpress.com/2017/10/jigsaw-movie.jpg'),
('Black Panther', 4, 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg'),
('Jumanji: Welcome to the Jungle', 3, 'https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png'),
('Pitch Perfect', 2, 'https://images-na.ssl-images-amazon.com/images/I/91puoBXyEVL._SL1500_.jpg'),
('Jaws', 5, 'https://images-na.ssl-images-amazon.com/images/I/41H5ZQQN4RL._SY445_.jpg'),
('The Hangover', 2, 'https://is2-ssl.mzstatic.com/image/thumb/Video60/v4/b3/1b/fd/b31bfd4a-9ef4-86cf-ec63-148c75394cb6/pr_source.lsr/268x0w.png'),
('Diary of A Mad Black Women', 2, 'https://images-na.ssl-images-amazon.com/images/I/81skf%2B0aYLL._SY445_.jpg');

INSERT INTO ratings (stars_rating, movieRating_id)
VALUES (5, 1), (4.5, 2), (4, 3), (4.5, 4), (3.5, 5), (4, 6), (3.5, 7), (4, 7), (5, 3), (3, 3);

INSERT INTO comments (comments_text, movie_id)
VALUES ('Best movie in the whole world!', 1), ('This movie was so action packed! Wish it didnt end!', 2), ('This movie was very adventurous, made me want to go into the jungle', 3), ('Rebel Wilson is soooo hilarious!', 4), ('Jaws was one of the greatest shark movies ever', 5), ('This movie was jokes, never a dull moment', 6), ('Madea is the funniest women in the planet at this point', 7), ('This movie was alright', 7), ('Man Kevin Hart is just freaking great!', 3);
