CREATE SCHEMA ART_GALLERY;
USE ART_GALLERY;
CREATE TABLE ARTISTS(
    artist_name VARCHAR(50) PRIMARY KEY NOT NULL,
    phone VARCHAR(12),
    address VARCHAR(50),
    birthPlace VARCHAR(50),
    age INT,
    artStyle VARCHAR(50)
);
CREATE TABLE ARTWORKS(
    artist VARCHAR(25) NOT NULL,
    title VARCHAR(50) PRIMARY KEY NOT NULL,
    artType VARCHAR(50),
    dateCreated DATE,
    dateAcq DATE,
    price FLOAT,
    location VARCHAR(50),
    FOREIGN KEY (artist) REFERENCES ARTIST(artist_name)
);
CREATE TABLE CUSTOMERS(
    custNum INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    custPhone VARCHAR(12),
    artPref VARCHAR(50)
);
CREATE TABLE ARTSHOWS(
    artist VARCHAR(50) NOT NULL,
    showDate DATETIME NOT NULL,
    location VARCHAR(50) NOT NULL,
    contact VARCHAR(50),
    contPhone VARCHAR(12),
    FOREIGN KEY (artist) REFERENCES ARTIST(artist_name)
);