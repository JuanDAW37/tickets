import { randomUUID } from 'node:crypto' // Paquete de npm para crear id's y claves encriptadas
import { readJSON } from "../utils.js"
import fs from 'fs';


const tickets = readJSON('./tickets.json');
let file = 'tickets.json';

export class TicketModel {
    /**
     * Recupera todos los tickets, o los de un mes
     * @param {mes} 
     * @returns tickets
     */
    static async getAll({mes}) {
        if(mes){            
            return tickets.filter(
                ticket => ticket.mes.some(g => g.toLowerCase() === mes.toLowerCase())
            )           
        }
        return tickets
    }
    /*
    static async getById(id) {
        const movie = movies.find(movie => movie.id === id)
        if(movie) return movie
    }*/

    /**
     * Crea un ticket
     * @param {input} 
     * @returns newTicket
     */
    static async create({input}){                      
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return;
            }
            let dataArray = JSON.parse(data);            
            let datos=[];
            dataArray.forEach(e => {
                datos.push(e);    
            });
            const newTicket = {
                id: randomUUID(), 
                ...input
            }        
            datos.push(newTicket)                       
            fs.writeFile(file, JSON.stringify(datos, null, 2), (error)=>{
                if(error){
                    console.log(error);
                    throw error;                
                }else{
                    console.log(`Datos grabados... ${newTicket.descripcion}`);                
                }           
            });        
            return newTicket;
        })
    }

    /**
     * Se borran todos los tickets
     * @returns 
     */
    static async delete(){
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer el archivo:', err);
                return;
            }                       
            let datos=[];            
            fs.writeFile(file, JSON.stringify(datos, null, 2), (error)=>{
                if(error){
                    console.log(error);
                    throw error;                
                }else{
                    console.log(`Datos eliminados...`);                
                }           
            });        
            return datos;
        })        
    }    
}