USE ART_GALLERY;
INSERT INTO ARTISTS (
        artist_name,
        phone,
        address,
        birthPlace,
        age,
        artStyle
    )
VALUES (
        "Vincent Gogh",
        '123-456-789',
        "Some Street 123, Fullerton",
        "Italy",
        34,
        "Painting"
    ),
    (
        "Pablo Picasso",
        "987-654-321",
        "Another Street 321,  Fullerton",
        "Russia",
        54,
        "Painting"
    ),
    (
        "Leonardo da Vinci",
        "233-444-555",
        "School Place 89, Fullerton",
        "Greece",
        78,
        "Portrait"
    ),
    (
        "Michelangelo",
        "788-443-455",
        "Far Away St 789, Fullerton",
        "Idaho",
        12,
        "Scultpure"
    );
INSERT INTO ARTWORKS (
        title,
        artist,
        artType,
        dateCreated,
        dateAcq,
        price,
        location
    )
VALUES (
        "The Starry Night",
        "Vincent Gogh",
        "Painting",
        "1889-01-01",
        "2010-02-12",
        344450.0,
        "Italy"
    ),
    (
        "Guernica",
        "Pablo Picasso",
        "Painting",
        "1937-04-10",
        "2001-08-03",
        250000.50,
        "Spain"
    ),
    (
        "Mona Lisa",
        "Leonardo da Vinci",
        "Portrait",
        "1920-09-03",
        "1945-12-11",
        1000000000000.00,
        "France"
    ),
    (
        "David",
        "Michelangelo",
        "Scultpure",
        "1504-10-12",
        "1892-10-21",
        323823828.42,
        "China"
    );
INSERT INTO CUSTOMERS (custPhone, artPref)
VALUES ("434-333-444", "Painting"),
    ("111-222-333", "Portraint"),
    ("222-444-666", "Sculpture"),
    ("123-155-892", "Surrealism");
INSERT INTO ARTSHOWS(artist, showDate, location, contact, contPhone)
VALUES (
        "Pablo Picasso",
        "2022-03-02 01:10:03",
        "Paris",
        "Julio",
        "939-321-452"
    ),
    (
        "Michelangelo",
        "2023-06-21 03:02:20",
        "Texas, US",
        "James",
        "619-294-2124"
    ),
    (
        "Michelangelo",
        "1000-01-01 00:00:00",
        "Jordan",
        "Cliff",
        "609-492-123"
    ),
    (
        "Leonardo da Vinci",
        "2024-01-30 02:30:20",
        "Mexico",
        "Borbie",
        "110-110-110"
    );