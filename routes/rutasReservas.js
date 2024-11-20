// Propósito: Manejar las rutas de las reservas

// Importar express y el controlador de reservas
const express = require('express');
const reservaController = require('../controllers/reservaControllers.js')

// Crear una instancia de express para manejar las rutas
const ruta = express.Router();

// Definir las rutas
ruta.post('/reservas', reservaController.crearReserva);

ruta.get('/reservas', reservaController.consultarReservas);

ruta.route('/reservas/:id')
    .get(reservaController.consultarReservasPorId)
    .put(reservaController.actualizaReserva)
    .delete(reservaController.eliminaReserva);

ruta.get('/reservasPorHotel',reservaController.reservasPorHotel);

ruta.get('/reservasPorEstado', reservaController.estadoReserva);

ruta.get('/reservasPorHabitacion', reservaController.reservaPorHabitacion);

ruta.get('/reservasPorHuesped', reservaController.numeroHuespedes);

ruta.get('/reservasPorFechas', reservaController.obtenerReservaPorFechas);

// Exportar las ruta para ser utilizada en el archivo principal
module.exports =  ruta;