const express = require('express');
const router = express.Router();
const usuariocontrolador = require('../controlador/usuarioControlador');

router.get('/', usuariocontrolador.obtenerUsuarios);
router.post('/', usuariocontrolador.crearUsuarios);
router.put('/:id', usuariocontrolador.actualizarUsuario);
router.delete('/:idUsuario', usuariocontrolador.eliminarUsuario);

module.exports = router;