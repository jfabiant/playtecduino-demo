const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    var clase = 1
    var sessionId = req.session.id
    res.render('index', {clase, sessionId})
})

module.exports = router