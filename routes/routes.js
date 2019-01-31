const express = require('express')
const router = express.Router()

router.get('/teacher/', function(req, res){
    var clase = 1
    res.render('teacher', {clase})
})
router.get('/student/', function (req, res) {
    var clase = 1
    res.render('student', {clase})
})

module.exports = router