const pool = require('../configs/connection');

let queryStudentsTable = `
CREATE TABLE "Students"(
	id serial primary key,
	"firstName" VARCHAR NOT NULL,
	"lastName" VARCHAR NOT NULL,
	email VARCHAR NOT NULL,
    gender VARCHAR NOT NULL,
    "birthDate" DATE
); `;

pool.query(queryStudentsTable, (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log('students table was created');
    }
})


let queryTeachersTable = `
CREATE TABLE "Teachers"(
	id serial primary key,
	"firstName" VARCHAR NOT NULL,
	"lastName" VARCHAR NOT NULL,
	email VARCHAR NOT NULL,
    gender VARCHAR NOT NULL
); `;

pool.query(queryTeachersTable, (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log('teachers table was created');
    }
})


let querySubjectsTable = `
CREATE TABLE "Subjects"(
	id serial primary key,
	"subjectName" VARCHAR NOT NULL
); `;

pool.query(querySubjectsTable, (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log('students table was created');
    }
})