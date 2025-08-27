let productos = [];

const getAllProductos = () => productos;

const getProductoById = (idProducto) =>
    productos.find(product => product.idProducto === idProducto);

const addProducto = (producto) => {
    productos.push(producto);
    return producto;
};

const updateProducto = (idProducto, data) => {
    const index = productos.findIndex(product => product.idProducto === idProducto);
    if (index === -1) return null;

    productos[index] = { ...productos[index], ...data };
};

const deleteProducto = (idProducto) => {
    const index = productos.findIndex(user => user.productos === idProducto);
    if (index === -1) return null;

    const eliminado = productos.splice(index, 1);
    return eliminado[0];
};

module.exports = {
    getAllProductos,
    getProductoById,
    addProducto,
    updateProducto,
    deleteProducto
};