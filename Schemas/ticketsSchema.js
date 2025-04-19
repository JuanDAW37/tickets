import z from 'zod'

/**
 * Modelo de validación de tickets usando Zod
 */
const ticketSchema = z.object({
    numero: z.number({required_error:'El número es obligatorio'}),
    fecha: z.string({required_error: 'La fecha es obligatoria', invalid_type_error: 'La fecha debe ser un texto'}),
    descripcion: z.string({required_error: 'La descripción es obligatoria', invalid_type_error: 'La descripción debe ser un texto'}),        
    base: z.number({message:'El iva, debe ser un número'}).default(0),
    iva: z.number().positive({message:'El iva, debe ser un número'}),
    cuota: z.number({message:'La cuota, debe ser un número'}).default(0),
    total: z.number({message:'El total, debe ser un número'}).default(0)
})

/**
 * Método para validar un ticket
 * @param ticket 
 * @returns 
 */
export function validarTicket(ticket){
    return ticketSchema.safeParse(ticket) // Con esto, devuelve un objeto tipo result, que indica si hay o no datos    
}