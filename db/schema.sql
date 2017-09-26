USE burgers_db;

CREATE TABLE burgers(
	id INTEGER auto_increment not null,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    date TIMESTAMP,
    primary key(id)
    );