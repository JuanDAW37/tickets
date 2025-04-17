import {validarTicket} from "../Schemas/ticketsSchema.js"
import { TicketModel } from "../Models/tickets.js"
export class TicketController {    
    
    /**
     * Recupera todos los tickets o los de un mes
     * @param request 
     * @param response 
     */
    getAll = async (request, response) => {
        const { mes } = request.query
        const tickets = await TicketModel.getAll({mes})
        response.json(tickets)
    }

    /*
    getById = async (request, response) => {
        const {id} = request.params // Recupero el valor que viene en el id y lo guardo en la constante id
        const ticket = await TicketModel.getById({id})
        if(ticket){
            return response.json(ticket)
        }else{
            return response.status(404).json({'mensaje':'Ticket no encontrado!!!'})
        }
    }*/

    /**
     * Crea un ticket
     * @param request 
     * @param response 
     * @returns status:201 OK || 400 Error
     */
    create = async (request, response) => {             
        const resultadoValidar=validarTicket(request.body)
        if(!resultadoValidar.success){
            return response.status(400).json( { error:JSON.parse( resultadoValidar.error.message ) } )
        }
        const newTicket = await TicketModel.create({input: resultadoValidar.data})                
        return response.status(201).json(newTicket)
    }

    /**
     * Elimina todos o un solo ticket
     * @param request 
     * @param response 
     * @returns status:204 OK || 404 Error
     */
    delete = async (request, response) => {            
        const deleted = await TicketModel.delete()
        deleted == true ? response.status(204).json({message:'Ticket eliminado'}) : response.status(404).json({message:'Ticket no encontrado!!!'}) // Si se elimina, devuelve un 204, si no, un 404
        return deleted
    }    
}