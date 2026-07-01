/*
    Event Routes
    /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require ('../middlewares/validar-json-web-token')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

//todos tienes que pasar por la validacion JWT
router.use( validarJWT )

// obtener eventos
router.get('/', getEventos )

//crear un nuevo evento
router.post
    ('/', 
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(), 
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento );

//Actualizar evento
router.put('/:id', actualizarEvento )

//Borrar evento
router.delete('/:id', eliminarEvento )

module.exports = router;