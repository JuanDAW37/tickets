import cors from 'cors';

const ACCEPTED_ORIGINS = ['http://localhost:1234', 'http://localhost:5173']
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