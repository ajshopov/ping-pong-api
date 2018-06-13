-- TRUNCATE AND RESET SEQUENCES
TRUNCATE TABLE players;
TRUNCATE TABLE matches;

ALTER SEQUENCE players_id_seq RESTART WITH 1;
ALTER SEQUENCE matches_id_seq RESTART WITH 1;

-- PLAYERS DATA
INSERT INTO players (name, points) VALUES ('Alex', 1500);
INSERT INTO players (name, points) VALUES ('James', 1500);
INSERT INTO players (name, points) VALUES ('Fouad', 1000);
INSERT INTO players (name, points) VALUES ('Robbie', 1000);
INSERT INTO players (name, points) VALUES ('DT', 800);

-- MATCHES DATA
INSERT INTO matches (p1, p2, winner, score, p1_diff, p2_diff, date_played) VALUES (1, 2, 2, '11-9', 50, 20, '13/07/2018');
INSERT INTO matches (p1, p2, winner, score, p1_diff, p2_diff, date_played) VALUES (3, 4, 3, '11-9', 50, 20, '13/07/2018');
