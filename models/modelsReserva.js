// Clase Reserva que representa una reserva en el sistema
class Reserva {
    constructor(id, fechaInicio, fechaTermino, cantidadHuespedes, hotel, tipoHabitacion, estado) {
        this.id = id,
        this.fechaInicio = fechaInicio,
        this.fechaTermino = fechaTermino,
        this.cantidadHuespedes = cantidadHuespedes,
        this.hotel = hotel,
        this.tipoHabitacion = tipoHabitacion,
        this.estado = estado
    }
}

module.exports =  Reserva;