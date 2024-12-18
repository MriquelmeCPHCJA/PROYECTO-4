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

// Consultar una reserva por ID
const consultarReservasPorId = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const reserva = reservas.find(r => r.id === id);

        if (!reserva) {
            throw new Error('Reserva no encontrada');
        };

        return res.status(200).json(
            {
                msg: 'Consulta exitosa',
                reserva: reserva
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

// Actualizar una reserva por ID
const actualizaReserva = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const reservaIndex = reservas.findIndex(r => r.id === id);

        if (reservaIndex === -1) {
            throw new Error('Reserva no encontrada');
        }
     
        reservas[reservaIndex] = { ...reservas[reservaIndex], ...req.body };

          return res.status(201).json({
                    msg: "Reserva actualizada con éxito",
                    data: reservas[reservaIndex],
          });
      
    } catch (error) {
       return res.status(404).json(
          {
               msg: error.message
          }
      );
    }

};

// Eliminar una reserva por ID
const eliminaReserva = (req, res) => { 

    try {
        const id = parseInt(req.params.id);
        const reservaToDelete = reservas.findIndex(r => r.id === id);

        if (reservaToDelete === -1) {
            throw new Error('Reserva no encontrada');
        };

        reservas.splice(reservaToDelete, 1);
        return res.status(200).json(
          { 
              msg: 'Reserva eliminada con éxito' 
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

// Filtro Query de reservas por hotel
const reservasPorHotel = (req, res) => {
    
    try {
        const { hotel } = req.query;

        if (!hotel){

            throw new Error('Hotel(es) no encontrado(s)')

        }
        
        const filtroHotel = data.reservas.filter(r => r.hotel.toLowerCase() === hotel.toLowerCase())

        return res.json(
            { 
                msg: 'Hotel(es) encontrado(s)', 
                data: filtroHotel
            }
        );
        
    } catch (error) {
        return res.status(404).json(
            {
                msg: error.message
            }
        );
    }
    
};

// Filtro Query de reservas por estado "pendiente", "confirmada", "cancelada"
const estadoReserva = (req, res) => {
    
    try {

        const { estado } = req.query;

        if (!estado) {

            throw new Error('El Estado de Reserva no puede estar vacío');

        } else if (estado.toLowerCase() != 'pendiente' && estado.toLowerCase() != 'cancelada' && estado.toLowerCase() != 'confirmada') {

            throw new Error('Estado de Reserva Inválido')
        };

        const filtroEstado = data.reservas.filter(reserva => reserva.estado.toLowerCase() === estado.toLowerCase());

        return res.status(200).json(
            { 
                msg: 'Reserva(s) encontrada(s)', 
                data: filtroEstado
            }
        )
        
    } catch (error) {
        return res.status(404).json(
            {
                msg: error.message
            }
        )
    }

    
};

// Filtro Query de reservas por tipo de habitación
const reservaPorHabitacion = (req, res) => {
    
    try {

        const { tipoHabitacion } = req.query;

        if (!tipoHabitacion) {

            throw new Error('Tipo de habitación no puede estar vacío');

        } else if (tipoHabitacion.toLowerCase() != 'suite' && tipoHabitacion.toLowerCase() != 'individual' && tipoHabitacion.toLowerCase() != 'familiar' && tipoHabitacion.toLowerCase() !=  'doble'){

            throw new Error('No existe el tipo de habitación');

        }

        const filtroTipoHabitacion = data.reservas.filter(reserva => reserva.tipoHabitacion.toLowerCase() === tipoHabitacion.toLowerCase());

        return res.status(200).json(
            { 
                msg: 'Reserva(s) encontrada(s)', 
                data: filtroTipoHabitacion
            }
        )
        
    } catch (error) {
        return res.status(404).json(
            {
                msg: error.message
            }
        )
    }
    
};

// filtro Query de reservas por cantidad de huéspedes
const numeroHuespedes = (req, res) => {
    
    try {

        const { cantidadHuespedes } = req.query;

        const filtroHuespedes = data.reservas.filter(reserva => reserva.cantidadHuespedes == cantidadHuespedes);

        if (!cantidadHuespedes) {

            throw new Error('Número de Huespedes no puede estar vacío');

        } else if (cantidadHuespedes <= 0) {

            throw new Error('Número de Huéspedes Inválido')
        }

        return res.status(200).json(
            { 
                msg: 'Reserva(s) encontrada(s)', 
                data: filtroHuespedes
            }
        )
        
    } catch (error) {
        return res.status(404).json(
            {
                msg: error.message
            }
        )
    }
    
};

// filtro Query de reservas por rangos de fechas
const obtenerReservaPorFechas = (req, res) => {

    try {
        
        const { fechaInicio, fechaTermino } = req.query;

        const fechaInicioFormateada = new Date(fechaInicio);
        const FechaTerminoFormateada = new Date(fechaTermino);

        if (!fechaInicio || !fechaTermino) {

            throw new Error('Debe ingresa las fechas de Inicio y Termino de la reserva')

        };
        
        if (fechaInicioFormateada > FechaTerminoFormateada) {

            throw new Error('La fecha de Inicio no puede ser mayor a la fecha de Termino')
            
        };


             const reservasFiltradas = data.reservas.filter(r => {
            const inicioReserva = new Date(r.fechaInicio);
            const terminoReserva = new Date(r.fechaTermino);

            return inicioReserva >= fechaInicioFormateada && terminoReserva <= FechaTerminoFormateada;
        });

        res.json(reservasFiltradas);
    
    } catch (error) {

        return res.status(400).json(
            {
                msg: error.message
            }
        );
    };
    
};

// Exportación de los métodos
module.exports = { 
    crearReserva,
    consultarReservas,
    consultarReservasPorId,
    actualizaReserva,
    eliminaReserva,
    reservasPorHotel,
    estadoReserva,
    reservaPorHabitacion,
    numeroHuespedes,
    obtenerReservaPorFechas
};
