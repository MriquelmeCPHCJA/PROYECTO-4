<div align="center">
    <h1>Proyecto 4: Reservas Hoteleras<h1>
</div>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vscode,nodejs,express,git" />
  </a>
</p>

<div align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/UDD-DWFS-orange">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/MriquelmeCPHCJA/UDD-PROYECTOS?color=green">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/MriquelmeCPHCJA/UDD-PROYECTOS">
</div>


🏨  **¡Bienvenido al repositorio de mi proyecto de reservas hoteleras!**

En este proyecto se ha desarrollado una aplicación web que permite gestionar las reservas de un hotel. He implementado las operaciones CRUD básicas y añadido funcionalidades adicionales para filtrar y buscar información.

### ️💻 Tecnologías Utilizadas
* **Node.js:** Entorno de ejecución JavaScript para el lado del servidor.
* **Express.js:** Framework web minimalista para Node.js.
* **Swagger:** Herramienta para documentar APIs REST.

### ⚙️ Estructura del Proyecto
* **.env:** Archivo de configuración para variables de entorno.
* **.gitignore:** Archivo que especifica los archivos y carpetas que no se deben subir al repositorio.
* **proyecto4.yaml:** Archivo de definición de la API en formato Swagger.
* **arquitectura de carpetas:**

PROYECTO
```
├─ README.md
├─ data.json
├─ controllers
│  └─ reservaControllers.js
├─ docs
│  └─ API-DOC-SWAGGER.yaml
├─ package-lock.json
├─ package.json
├─ routes
│  └─ rutasReservas.js
└─ server.js  <- ARCHIVO DE ENTRADA
```
### 🔀 Endpoints
A continuación, se detallan los endpoints disponibles y ejemplos de uso:

**POST:** /api/reservas
```
REQUEST BODY - application/json
Example

{
  "fechaInicio": "2024-11-20",
  "fechaTermino": "2024-11-20",
  "cantidadHuespedes": 1,
  "hotel": "string",
  "tipoHabitacion": "suite",
  "estado": "pendiente"
}
```
**GET:** /api/reservas
```
- No parameters -
Response Example

[
  {
    "id": 1,
    "fechaInicio": "2024-01-25",
    "fechaTermino": "2024-01-25",
    "cantidadHuespedes": 3,
    "hotel": "Hotel Sol de Oro",
    "tipoHabitacion": "Individual",
    "estado": "Pendiente"
  }
]
```
**GET:** /api/reservas/{id}
```
PARAMETERS PATH = id
Response Example

[
  {
    "id": 1,
    "fechaInicio": "2024-01-25",
    "fechaTermino": "2024-01-25",
    "cantidadHuespedes": 3,
    "hotel": "Hotel Sol de Oro",
    "tipoHabitacion": "Individual",
    "estado": "Pendiente"
  }
]
```
**PUT:** /api/reservas/{id}
```
PARAMETERS PATH = id
Request body - application/json
Example

  {
    "fechaInicio": "2024-01-25",
    "fechaTermino": "2024-01-25",
    "cantidadHuespedes": 3,
    "hotel": "Hotel Sol de Oro",
    "tipoHabitacion": "Individual",
    "estado": "Pendiente"
  }

```
**DELETE:** /api/reservas/{id}
```
PARAMETERS PATH = id
```
**GET:** /reservasPorHotel
```
PARAMETERS QUERY = hotel
Response Example

{
  "msg": "Hotel(es) encontrado(s)",
  "data": [
    {
      "id": 1,
      "fechaInicio": "2024-01-25",
      "fechaTermino": "2024-01-25",
      "cantidadHuespedes": 3,
      "hotel": "Hotel Sol de Oro",
      "tipoHabitacion": "Individual",
      "estado": "Pendiente"
    }
  ]
}
```
**GET:** /reservasPorEstado
```
PARAMETERS QUERY = estado
Response Example

{
  "msg": "Reserva(s) encontrada(s)",
  "data": [
    {
      "id": 1,
      "fechaInicio": "2024-01-25",
      "fechaTermino": "2024-01-25",
      "cantidadHuespedes": 3,
      "hotel": "Hotel Sol de Oro",
      "tipoHabitacion": "Individual",
      "estado": "Pendiente"
    }
  ]
}
```
**GET:** /reservasPorHabitacion
```
PARAMETERS QUERY = tipoHabitacion
Response Example

{
  "msg": "Reserva(s) encontrada(s)",
  "data": [
    {
      "id": 1,
      "fechaInicio": "2024-01-25",
      "fechaTermino": "2024-01-25",
      "cantidadHuespedes": 3,
      "hotel": "Hotel Sol de Oro",
      "tipoHabitacion": "Individual",
      "estado": "Pendiente"
    }
  ]
}
```
**GET:** /reservasPorHuesped
```
PARAMETERS QUERY = cantidadHuespedes 
Response Example

{
  "msg": "Reserva(s) encontrada(s)",
  "data": [
    {
      "id": 1,
      "fechaInicio": "2024-01-25",
      "fechaTermino": "2024-01-25",
      "cantidadHuespedes": 3,
      "hotel": "Hotel Sol de Oro",
      "tipoHabitacion": "Individual",
      "estado": "Pendiente"
    }
  ]
}
```
**GET:** /reservasPorFechas
```
PARAMETERS QUERY = fechaInicio fechaTermino 
Response Example

{
  "msg": "Reserva(s) encontrada(s)",
  "data": [
    {
      "id": 1,
      "fechaInicio": "2024-01-25",
      "fechaTermino": "2024-01-25",
      "cantidadHuespedes": 3,
      "hotel": "Hotel Sol de Oro",
      "tipoHabitacion": "Individual",
      "estado": "Pendiente"
    }
  ]
}
```

## ✅ Objetivos Alcanzados

logré los siguientes objetivos en este proyecto:

* **Operaciones CRUD:** Se han implementado las operaciones básicas de creación, lectura, actualización y eliminación de datos.
* **API REST:** Se ha desarrollado una API RESTful para una interacción con los datos.
* **Datos estructurados:** Se ha trabajado con datos organizados en una estructura definida.
* **Lógica de negocio:** Se ha implementado la lógica necesaria para gestionar las reservas.
* **Documentación:** Se ha documentado la API utilizando Swagger para facilitar su uso y mantenimiento.

## 🌎 Despliegue
La aplicación está desplegada en **Render.com**. Puedes acceder a ella en la siguiente dirección: [URL de despliegue]

## 📚 Resumen de la experiencia en el Proyecto 4: Reservas Hoteleras
Esta experiencia me ha permitido aplicar de manera práctica los conceptos aprendidos en el bootcamp sobre Node.js, Express.js, manejo de datos y desarrollo de APIs REST.

Mejorar mis habilidades en la resolución de problemas, familiarizarme con herramientas como Swagger para la documentación de APIs y Render.com para el despliegue de aplicaciones.

En general, este proyecto ha sido un desafío gratificante que me ha permitido crecer como desarrollador y adquirir una valiosa experiencia práctica en el desarrollo de aplicaciones web.