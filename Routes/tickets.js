import { Router } from "express";
import { TicketController } from "../Controllers/tickets.js";
import { TicketModel } from "../Models/tickets.js";

export const createTicketsRouter = (({ticketModel}) => {
    const ticketsRouter = Router()

    const ticketController = new TicketController({ticketModel})

    ticketsRouter.get('/', ticketController.getAll)

    //ticketsRouter.get('/:id', ticketController.getById)

    ticketsRouter.post('/', ticketController.create)

    ticketsRouter.delete('/', ticketController.delete)
    
    return ticketsRouter
})