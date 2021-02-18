const pool = require('../configs/connection')
const fs = require('fs')

let dataStudents = JSON.parse(fs.readFileSync('./data/students.json', 'utf-8'));
let queryInsertStudents = `INSERT INTO "Students" ("firstName", "lastName", email, gender, "birthDate") VALUES `;

for (let i = 0; i < dataStudents.length; i++) {
    if (i === dataStudents.length-1) {
        queryInsertStudents += `('${dataStudents[i].first_name}', '${dataStudents[i].last_name}', '${dataStudents[i].email}', '${dataStudents[i].gender}', '${dataStudents[i].birth_date}');`
    } else {
        queryInsertStudents += `('${dataStudents[i].first_name}', '${dataStudents[i].last_name}', '${dataStudents[i].email}', '${dataStudents[i].gender}', '${dataStudents[i].birth_date}'),`
    }  
}

pool.query(queryInsertStudents, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Table Students was inserted`);
    }
})



let dataTeachers = JSON.parse(fs.readFileSync('./data/teachers.json', 'utf-8'));
let queryInsertTeachers = `INSERT INTO "Teachers" ("firstName", "lastName", email, gender) VALUES `;

for (let i = 0; i < dataTeachers.length; i++) {
    if (i === dataTeachers.length-1) {
        queryInsertTeachers += `('${dataTeachers[i].first_name}', '${dataTeachers[i].last_name}', '${dataTeachers[i].email}', '${dataTeachers[i].gender}');`
    } else {
        queryInsertTeachers += `('${dataTeachers[i].first_name}', '${dataTeachers[i].last_name}', '${dataTeachers[i].email}', '${dataTeachers[i].gender}'),`
    }  
}

pool.query(queryInsertTeachers, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Table Teachers was inserted`);
    }
})


let dataSubjects = JSON.parse(fs.readFileSync('./data/subjects.json', 'utf-8'));
let queryInsertSubjects = `INSERT INTO "Subjects" ("subjectName") VALUES `;

for (let i = 0; i < dataSubjects.length; i++) {
    if (i === dataSubjects.length-1) {
        queryInsertSubjects += `('${dataSubjects[i].subject_name}');`
    } else {
        queryInsertSubjects += `('${dataSubjects[i].subject_name}'),`
    }  
}

pool.query(queryInsertSubjects, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Table Subjects was inserted`);
    }
})


