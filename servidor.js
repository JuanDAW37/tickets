import express,{ json } from 'express'
import {corsMiddleware} from './Middlewares/cors.js'
import { createTicketsRouter } from './Routes/tickets.js'
import { TicketModel } from './Models/tickets.js';

    
    const app = express()
    app.use(json())
    app.use(corsMiddleware()); // Permite solicitudes desde esta dirección

    app.disable('x-powered-by') // Deshabilita la cabecera de express
    app.use('/tickets', createTicketsRouter({TicketModel})) //Cuando accedo a /movies, voy a cargar todas las rutas que haya en moviesRouter

    const PORT = process.env.port ?? 1234

    app.listen(PORT, () => {
        console.log(`Server escuchando en el puerto ${PORT}`)
    })
