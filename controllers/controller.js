const { cpuUsage } = require("process")
const Model = require("../models/model")

class Controller {

    static createHomepage (req, res) {
        res.send('Welcome to the Homepage')
    }
 
    static createStudentsTable(req,res) {
        Model.insertStudents((err,data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('students.ejs', {data: data})
            }
        })
    }

    static createTeachersTable(req,res) {
        Model.insertTeachers((err,data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('teachers.ejs', {data: data})
            }
        })
    }


    static createSubjectsTable(req,res) {
        Model.insertSubjects((err,data) => {
            if (err) {
                res.send(err)
            } else {
                res.render('subjects.ejs', {data: data})
            }
        })
    }

    static displayAddedData(req,res) {
        res.render('addStudents.ejs')
    }

    static addingStudentsData(req, res) {
        const addedValue = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            gender: req.body.gender,
            birthDate: req.body.birthDate
        }
        Model.pushStudentsData(addedValue, (err, data) =>{
            if (err) {
                let errors = err.join(',')
                res.redirect(`/students/add?errors=${errors}`)
            } else {
                res.send('data has been sent!')
            }
        })
        
    }

    static deletingStudentsData(req,res) {
        const removeId = Number(req.params.id)

        Model.deleteStudents(removeId, (err, data) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/students')
            }
        })
    }

    static dataEditStudents(req, res) {
        const checkId = Number(req.params.id)
        
        // TODO HERE
    }

    static editDataStudents(req,res) {
      let id = req.params.id;
      let firstName = req.body.firstName;
      let email = req.body.lastName;
      let gender = req.body.gender;
      let birthDate = req.body.birthDate

      // TODO HERE

    }

}

module.exports = Controller