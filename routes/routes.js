const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    var clase = 1
    res.render('index', {clase})
})
router.get('/chat', function(req, res){
    res.render('chat')
})

module.exports = router