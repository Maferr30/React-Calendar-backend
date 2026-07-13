const express = require('express');
const { dbConnection } = require('./database/config');
require ('dotenv').config();
const cors = require('cors');
const patch  = require('path')

// crear servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

//directorio publico
app.use( express.static('public'));

//lectura y parseo del body
app.use ( express.json() );

//rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

app.use('*', (req, res) => {
    res.sendFile(patch.join(__ dirname, 'public/index.html'));
} )

//escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`servidor corriendo en puerto ${ process.env.PORT }`)
});
