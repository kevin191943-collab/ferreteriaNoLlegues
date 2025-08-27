const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const usuarioRutas = require('./vista/usuarioRutas');
const productoRutas = require('./vista/productoRutas')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/usuarios', usuarioRutas);
app.use('/productos', productoRutas);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});