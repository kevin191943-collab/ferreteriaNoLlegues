const modelo = require('../modelo/usuarioModelo.js');

const obtenerUsuarios = (req, res) => {
  try {
    const usuarios = modelo.getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los Usuarios', detalle: error.message });
  }
};

const crearUsuarios = (req, res) => {
  try {
    const { t1: idUsuario, t2: identificacion, t3: nombres, t4: telefono, t5: correo } = req.body;

    // Validar campos obligatorios
    if (!idUsuario || !identificacion || !nombres || !telefono || !correo) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    if (modelo.getUsuarioById(idUsuario)) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    const nuevo = { idUsuario, identificacion, nombres, telefono, correo };

    const UsuarioCreado = modelo.addUsuario(nuevo);
    res.status(201).json({ mensaje: 'Usuario creado correctamente', usuario: UsuarioCreado });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Usuario', detalle: error.message });
  }
};

const actualizarUsuario = (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const actualizado = modelo.updateUsuario(id, data);
    if (!actualizado) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Médico actualizado correctamente', usuario: actualizado });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el Usuario', detalle: error.message });
  }
};

const eliminarUsuario = (req, res) => {
  try {
    const { id } = req.params;

    const eliminado = modelo.deleteUsuario(id);
    if (!eliminado) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({ mensaje: 'Usuario eliminado correctamente', usuario: eliminado });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el médico', detalle: error.message });
  }
};

module.exports = {
  obtenerUsuarios,
  crearUsuarios,
  actualizarUsuario,
  eliminarUsuario
};
