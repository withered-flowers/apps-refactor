const express = require('express');
const router = express.Router()
const Controller = require('../controllers/controller')
const studentsRouter = require('./studentsRoute')

router.get('/',  Controller.createHomepage);
router.get('/students', Controller.createStudentsTable);
router.get('/teachers', Controller.createTeachersTable)
router.get('/subjects', Controller.createSubjectsTable)


router.use('/students', studentsRouter)



module.exports =  router;