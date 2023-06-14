const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT;
app.set('view engine', 'hbs');

//Contenido Estatico
app.use(express.static('public'));


//Rutas
app.get('/', function(req, res) {
    res.render('home');
})
app.get('/hola-mundo', function(req, res) {
    res.send('Hola mundo')
})
app.get('*', function(req, res) {
    res.send('404 | page no found')
})

app.listen(port)