import { Router } from "express";
import { TicketController } from "../Controllers/tickets.js";
import { TicketModel } from "../Models/tickets.js";

/**
 * Método para el ruteo de los tickets
 * @param ticketModel 
 * @returns 
 */
export const createTicketsRouter = (({ticketModel}) => {
    const ticketsRouter = Router()

    const ticketController = new TicketController({ticketModel})

    ticketsRouter.get('/', ticketController.getAll)

    ticketsRouter.get('/:mes', ticketController.getByMes)

    ticketsRouter.post('/', ticketController.create)

    ticketsRouter.delete('/', ticketController.delete)
    
    return ticketsRouter
})