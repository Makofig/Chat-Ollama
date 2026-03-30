// Leer las variables de entorno sin necesidad de dotenv
process.loadEnvFile(); 

import express from 'express';
import cors from 'cors'; 
import apiRouter from './routes/api.js'; 

const PORT = process.env.PORT ?? 3000;
const app = express(); 

// const ACCEPTED_ORIGINS = [
//     'http://localhost:5173', 
// ]
app.set('trust proxy', 1); // Si estás detrás de un proxy, como Nginx, para obtener la IP real del cliente
app.use(cors()); 
app.use(express.json()); 

app.use('/api', apiRouter); 

app.listen(PORT, () => { 
    console.log("Servidor iniciando...");
    console.log(`Servidor escuchando en http://localhost:${PORT}`); 
});