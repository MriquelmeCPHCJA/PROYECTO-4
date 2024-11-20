// Autor: Luis Marcelo Riquelme
// Proyecto4: Reservas de Hoteles

// Importar librerias
const express = require('express');
const cors = require('cors');

// Importar rutas
const ruta = require('./routes/rutasReservas.js');
const app = express();
require('dotenv').config();

// Configuración de Express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de variables de entorno
const port = process.env.PUERTO || 3000;
const url_local = process.env.URL_LOCAL || 'http://localhost';

// Configuración de rutas
app.use('/api', ruta);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Estoy ¡¡ VIVO !! en: ${url_local}:${port}`);
});