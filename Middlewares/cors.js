import cors from 'cors';

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
const ACCEPTED_ORIGINS = ['http://localhost:1234', 'http://localhost:5173']

/**
 * Método que habilita CORS (Cross-Origin Resource Sharing) en la API
 * Sólo se permite el acceso a los orígenes especificados en la lista de aceptados
 * @param acceptedOrigins 
 * @returns 
 */
export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        if(acceptedOrigins.includes(origin)){
            return callback(null, true)
        }
        if (!origin){ 
            return callback(null, true)
        }
        return callback('No permitido, intercambio de recursos de origen cruzado (CORS)', false)
    }
})