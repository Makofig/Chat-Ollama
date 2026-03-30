import { Router } from "express";
import apiController from "../controllers/api.js"; 
import reatLimit from "express-rate-limit"; 

const router = Router();

const limiter = reatLimit({
    windowMs: 60 * 1000, // 1 minuto
    limit: 5, // Limitar a 5 solicitudes por IP por minuto 
    message: { error: "Demasiadas solicitudes, por favor intenta de nuevo más tarde."},
    legacyHeaders: false, 
    standardHeaders: 'draft-8' 
})

// router.use(limiter); // Otra forma de aplicar el limitador a todas las rutas de este router 
//router.get('/:mensaje', apiController.chatController); 
router.post('/chat', limiter, apiController.chatController); 

export default router; 