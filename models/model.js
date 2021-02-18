const { Pool } = require('pg');
const Student = require('../models/student')
const pool = require('../configs/connection');
const Subject = require('./subjects');
const Teachers = require('./teachers');

class Model {
    static insertStudents(callback) {

        let queryInsert = `SELECT * FROM "Students"`


        pool.query(queryInsert, (err, result) => {
            if (err) {
                // console.log(err);
                callback(err, null)
            } else {
                
                let data = result.rows;

                let instanceStudent = data.map((element) => {
                    return new Student (element.id, element.firstName, element.lastName, element.email, element.gender, element.birthDate)
                })
                callback(null, instanceStudent)
            }
        })

    }

    static insertTeachers(callback) {

        let queryInsert = `SELECT * FROM "Teachers"`


        pool.query(queryInsert, (err, result) => {
            if (err) {
                // console.log(err);
                callback(err, null)
            } else {
                
                let data = result.rows;

                let instanceTeachers = data.map((element) => {
                    return new Teachers (element.id, element.firstName, element.lastName, element.email, element.gender)
                })
                callback(null, instanceTeachers)
            }
        })

    }

    static insertSubjects(callback) {

        let queryInsert = `SELECT * FROM "Subjects"`


        pool.query(queryInsert, (err, result) => {
            if (err) {
                // console.log(err);
                callback(err, null)
            } else {
                
                let data = result.rows;

                let instanceSubjects = data.map((element) => {
                    return new Subject (element.id, element.subjectName)
                })
                callback(null, instanceSubjects)
            }
        })

    }

    static pushStudentsData(data, callback) {
        let insertData = `INSERT INTO "Students" ("firstName", "lastName", email, gender, "birthDate") VALUES `;

        let errors = []
        if(!data.firstName) errors.push('First Name is required!')
        if(!data.lastName) errors.push('Last Name is required!')
        if(!data.email) errors.push('Email is required!')
        if(!data.gender) errors.push('Gender is required!')
        if(!data.birthDate) errors.push('Birth Date is required!')

        if (errors.length) {
            callback(errors, null)
        } else {
            let addedValue = `('${data.firstName}', '${data.lastName}', '${data.email}', '${data.gender}', '${data.birthDate}')`
            pool.query(insertData + addedValue, (err, result) => {
                if (err) {
                    callback(err,null)
                } else {
                    callback(null, result)
                }
            })
        } 
    }


    static deleteStudents(id, callback) {
        let deleteData = `DELETE FROM "Students" WHERE id = ${id}`

        pool.query(deleteData, (err,result) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, result)
            }
        })
    }
    
    // TODO HERE
    static identifyStudentsId() { }

    // TODO HERE
    static editingStudents() { }
}

module.exports = Model;