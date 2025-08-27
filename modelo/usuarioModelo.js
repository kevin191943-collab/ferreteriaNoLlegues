let usuarios = [];

const getAllUsuarios = () => usuarios;

const getUsuarioById = (idUsuario) =>
    usuarios.find(u => u.idUsuario === idUsuario);

const addUsuario = (usuario) => {
    usuarios.push(usuario);
    return usuario;
};

const updateUsuario = (idUsuario, data) => {
    const index = usuarios.findIndex(u => u.idUsuario === idUsuario);
    if (index === -1) return null;

    usuarios[index] = { ...usuarios[index], ...data };
};

const deleteUsuario = (idUsuario) => {
    const index = usuarios.findIndex(u => u.usuarios === idUsuario);
    if (index === -1) return null;

    const eliminado = usuarios.splice(index, 1);
    return eliminado[0];
};

module.exports = {
    getAllUsuarios,
    getUsuarioById,
    addUsuario,
    updateUsuario,
    deleteUsuario
};