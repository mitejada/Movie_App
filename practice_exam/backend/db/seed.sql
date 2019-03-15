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


INSERT INTO genres (name)
VALUES ('Horror'), ('Comedy'), ('Adventure'), ('Action'), ('Thriller');

INSERT INTO movies (title, genre_id, img_url)
VALUES ('Saw', 1, 'https://earofnewtdotcom.files.wordpress.com/2017/10/jigsaw-movie.jpg'),
('Black Panther', 4, 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg'),
('Jumanji: Welcome to the Jungle', 3, 'https://upload.wikimedia.org/wikipedia/en/d/dc/Jumanji_Welcome_to_the_Jungle.png'),
('Pitch Perfect', 2, 'https://images-na.ssl-images-amazon.com/images/I/91puoBXyEVL._SL1500_.jpg'),
('Jaws', 5, 'https://images-na.ssl-images-amazon.com/images/I/41H5ZQQN4RL._SY445_.jpg'),
('The Hangover', 2, 'https://is2-ssl.mzstatic.com/image/thumb/Video60/v4/b3/1b/fd/b31bfd4a-9ef4-86cf-ec63-148c75394cb6/pr_source.lsr/268x0w.png'),
('Diary of A Mad Black Women', 2, 'https://images-na.ssl-images-amazon.com/images/I/81skf%2B0aYLL._SY445_.jpg'),
('Anabelle', 1, 'http://landingpages.parquesreunidos.com/wp-content/uploads/2018/09/Anabelle.jpg'),
('Fast & Furious 6', 4, 'https://cdn-images-1.medium.com/max/1200/1*-gDeYmNSwJ2q5ahROs3vdQ.jpeg'),
('Avengers: Infinity War', 3, 'https://lumiere-a.akamaihd.net/v1/images/r_avengers_infinitywar_nowplaying_mobile_4874f720.jpeg'),
('Breaking In', 5, 'https://upload.wikimedia.org/wikipedia/en/e/eb/BreakinInPromotionalPoster.png');

INSERT INTO ratings (stars_rating, movieRating_id)
VALUES (5, 1),
(4.5, 2),
(4, 3),
(4.5, 4),
(3.5, 5),
(4, 6),
(5, 6),
(3.5, 7),
(4, 7),
(5, 3),
(3, 3),
(4.4, 1),
(3.9, 2),
(2.8, 5),
(4, 8),
(4.5, 9),
(5, 10),
(4, 11),
(3.5, 8),
(3, 9),
(4.5, 10),
(3.5, 11);

INSERT INTO comments (comments_text, movie_id)
VALUES ('Best movie in the whole world! ', 1),
('Everything was just so well planned, always kept me interested ', 1),
('This movie was so action packed! Wish it didnt end! ', 2),
('Wakanda FOREVER! ', 2),
('This was straight jokes', 4),
('This movie was very adventurous, made me want to go into the jungle ', 3),
('Rebel Wilson is soooo hilarious! ', 4),
('Jaws was one of the greatest shark movies ever ', 5),
('This movie was jokes, never a dull moment ', 6),
('Madea is the funniest women in the planet at this point ', 7),
('This movie was alright ', 7),
('Man Kevin Hart is just freaking great! ', 3),
('Why it always gotta be dolls ', 8),
('I love the entire series, always action packed ', 9),
('Man the movie was great, but starlord is a dumbass ', 10),
('Mothers are just amazing ! ', 11),
('Dont miss with moms bruh, she wont stop to save her kids! ', 11),
('Im trying to be riding dirty after watching this ', 9),
('I dont think I can own a doll after watching this', 8),
('Thanos gotta go ! ', 10)
