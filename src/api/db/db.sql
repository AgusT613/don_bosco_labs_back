CREATE DATABASE "DonBoscoLabs";

CREATE TABLE IF NOT EXISTS staff (
    user_id SERIAL PRIMARY KEY,
    name varchar(45) DEFAULT NULL,
    surname varchar(45) DEFAULT NULL,
    address varchar(50) DEFAULT NULL,
    dni varchar(8) DEFAULT NULL,
    email varchar(45) NOT NULL,
    password varchar(100) NOT NULL,
    entry_date date DEFAULT NULL,
    area_id int DEFAULT NULL,
    job_position_id int DEFAULT NULL
);

INSERT INTO staff (email, password) VALUES ('andreszenase@gmail.com', 'andres123456789'), ('mariamartinez@gmail.com', 'maria123456789');