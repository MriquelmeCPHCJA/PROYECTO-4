// Description: Controllers para Reservas

// Import de los modelos
const Reserva = require('../models/modelsReserva.js');

const data = require('../data.json');

// variable para almacenar las reservas de pruebas
let reservas = [
      {
        id: 1,
        fechaInicio: "2024-11-20",
        fechaTermino: "2024-11-25",
        cantidadHuespedes : 2,
        hotel: "Hotel Sol y Mar",
        tipoHabitacion: "Suite",
        estado: "Confirmada"
      },
      {
        id: 2,
        fechaInicio: "2024-12-01",
        fechaTermino: "2024-12-05",
        cantidadHuespedes: 1,
        hotel: "Hotel Luna Azul",
        tipoHabitacion: "Individual",
        estado: "Pendiente"
      },
      {
        id: 3,
        fechaInicio: "2024-11-22",
        fechaTermino: "2024-11-26",
        cantidadHuespedes: 4,
        hotel: "Hotel Estrella del Norte",
        tipoHabitacion: "Familiar",
        estado: "Cancelada"
      }
];

// Creación de una reserva
const crearReserva = (req, res) => {

    try {

        const id = reservas.length + 1;
        const { fechaInicio, fechaTermino, cantidadHuespedes, hotel, tipoHabitacion, estado } = req.body;
        const fechaInicioFormateada = new Date(fechaInicio);
        const FechaTerminoFormateada = new Date(fechaTermino);

        if (!fechaInicio || !fechaTermino || !hotel || !tipoHabitacion || !estado) {

            throw new Error('Todos los campos son obligatorios');

        } else if (cantidadHuespedes <= 0) {

            throw new Error('Cantidad de Huéspedes Inválida');

        } else if (estado.toLowerCase() != 'pendiente' && estado.toLowerCase() != 'cancelada' && estado.toLowerCase() != 'confirmada') {

            throw new Error('Estado de Reserva Inválido');

        } else if (tipoHabitacion.toLowerCase() != 'suite' && tipoHabitacion.toLowerCase() != 'individual' && tipoHabitacion.toLowerCase() != 'familiar' && tipoHabitacion.toLowerCase() != 'doble') {

            throw new Error('Tipo de Habitación Inválido');

        } else if (fechaInicioFormateada > FechaTerminoFormateada) {

            throw new Error('La fecha de Inicio no puede ser mayor a la fecha de Termino');

        };

        const nuevaReserva = new Reserva ( id, fechaInicio, fechaTermino, cantidadHuespedes, hotel, tipoHabitacion, estado );

        reservas.push(nuevaReserva);

        return res.status(201).json(
            {
                msg: 'Reserva Agregada', 
                data: nuevaReserva
            }
        );

    } catch (error) {
        return res.status(400).json(
            { 
                msg: error.message 
            }
        );
    }
};

// Listar todas las reservas
const consultarReservas = (req, res) => {
    try {
       
        if (reservas.length === 0) {
            throw new Error('No hay reservas');
        };

        return res.status(200).json(
            {
                msg: 'Consulta exitosa',
                data: reservas
            }
        );

    } catch (error) {
        return res.status(404).json(
           {
                msg: error.message 
           }
       );
    };
};