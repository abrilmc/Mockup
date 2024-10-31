const express = require("express");
const config = require('./config')

const clientes = require('./modules/clientes/rutas')

const app = express();

//configuración
app.set('port', config.app.port)

//rutas
app.use('/api/clientes', clientes)

module.exports = app;
