const express = require('express')
const router = express.Router();
const Controller = require('../controllers/controller')

//RELEASE 2 ADD DATA TO DATABASE
router.get('/', Controller.createStudentsTable)
router.get('/add', Controller.displayAddedData)
router.post('/add', Controller.addingStudentsData)


router.get('/:id/delete', Controller.deletingStudentsData)

router.get('/:id/edit', Controller.dataEditStudents)
router.post('/:id/edit', Controller.editDataStudents)




module.exports = router