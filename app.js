const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

/* view engine setup */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

/* routes */
const routes = require('./routes/routes')
app.use('/', routes)

const server = app.listen(3000, function(){
    console.log('http://localhost:3000')
})

/* sockets */
const io = require('socket.io')(server);

io.on('connection', function(socket){
    //console.log('a user connected');
    socket.on('new_message', function(data){
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message});
    })
});

module.exports = app