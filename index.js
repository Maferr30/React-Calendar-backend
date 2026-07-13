const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');
// 1. Corregido: 'path' con h al final
const path = require('path'); 

// crear servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

//directorio publico
app.use( express.static('public'));

//lectura y parseo del body
app.use( express.json() );

//rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// 2. Corregido: path.join y __dirname todo junto
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${ process.env.PORT }`)
});