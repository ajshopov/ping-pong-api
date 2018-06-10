CREATE DATABASE ping_pong;

CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  name VARCHAR(127),
  score INTEGER NOT NULL
);

INSERT INTO players (name, score) VALUES ('Alex', 1500);
INSERT INTO players (name, score) VALUES ('James', 1500);