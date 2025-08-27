const express = require('express');
const router = express.Router();
const productoControlador = require('../controlador/productoControlador');

router.get('/', productoControlador.obtenerProductos);
router.post('/', productoControlador.crearProducto);
router.put('/:id', productoControlador.actualizarProducto);
router.delete('/:idProducto', productoControlador.eliminarProducto);

module.exports = router;