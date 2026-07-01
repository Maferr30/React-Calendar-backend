const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        // CORRECCIÓN: Borramos todo el objeto de configuración antiguo
        await mongoose.connect( process.env.DB_CNN );

        console.log('BD online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }
}

module.exports = {
    dbConnection
}