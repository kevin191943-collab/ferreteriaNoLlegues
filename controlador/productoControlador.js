const modelo = require('../modelo/productoModelo');

const obtenerProductos = (req, res) =>{
    try{
        const productos = modelo.getAllProductos();
        res.json(productos);
    }catch (error){
        res.status(500).json({error: 'Error al Obtener todos los productos', detalle: error.message });
    }
};

const crearProducto = (req, res) => {
    try {
        const { t1: idProducto, t2: producto, t3: valorUnitario} = req.body;

        if(!idProducto || !producto || !valorUnitario){
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        if(modelo.getProductoById(idProducto)){
            return res.status(400).json({ error: 'El producto ya existe' });
        }

        const nuevo = { idProducto, producto, valorUnitario};

        const productoCreado = modelo.addProducto(nuevo);
        res.status(201).json({ mensaje: 'Producto Creado Correctamente', producto: productoCreado});
    }catch (error) {
        res.status(500).json({  error: 'Error al crear el producto', detalle: error.message });
    }
};

const actualizarProducto = (req, res) => {
    try{
        const { id } = req.params;
        const data = req.body;

        const actualizado = modelo.updateProducto(id, data);
        if(!actualizado){
            return res.status(404).json({ error: 'Producto no Encontrado'});
        }

        res.json({ mensaje: 'Producto Actualizado Correctamente', producto: actualizado});
    }catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto', detalle: error.message});
    }
};

const eliminarProducto = (req, res) => {
    try {
        const { id } = req.params;
        
        const eliminado = modelo.deleteProducto(id);
        if (!eliminado) {
            return res.status(404).json({ error: 'Prodcuto no Encontrado'});
        }

        res.json({ mensaje: 'Producto Eliminado Correctamente', producto: eliminado});
    }catch {
        res.status(500).json({ error: 'Error al Eliminar prouducto', detalle: error.message});
    }
};

module.exports = {
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};