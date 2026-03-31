process.loadEnvFile(); 

import ollama from 'ollama'

// Esportarlo como una clase o un objeto con funciones 
// export class ApiController {
//     static async chatController(req, res) {
//         const { mensaje } = req.params; 
//         const URL = process.env.MODELO_URL_IA; 

//         if (!URL) {
//             return res.status(500).json({ error: 'La URL del modelo de IA no está configurada'}); 
//         }
//         // Logica para conectar con Ollama y obtener una respuesta 
//         fetch(`${URL}`, {

//         })
//         return res.json({ respuesta: `Recibí el mensaje: ${mensaje}`});
//     }

//     static async otroMetodo(req, res) {
//         return res.json({ mensaje: 'Este es otro método del controlador' });
//     }
// }
//let historial = []; 

const URL = process.env.MODELO_URL_IA; 
const Model = process.env.MODELO_IA;

async function chatController(req, res) {
    
    try {

        const { messages } = req.body;

        console.log("Mensajes recibidos en el controlador -->", messages); 
       
        if (!Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ error: "Messages debe ser un array válido" });
        }

        //historial.push({ role: 'user', content: mensaje});
        //console.log("Historial actual:", historial); 
        // Recuperamos el ultimo mensaje para verificar que sea del usuario. 
        // const lastMessage = messages[messages.length - 1]; 

        // if (lastMessage.role !== 'user') {
        //     return res.status(400).json({ error: "El último mensaje debe ser del usuario" });
        // }

        // const mensajesConNoThink = messages.map(msg => {
        //     if (msg.role === 'user') {
        //         return {
        //             ...msg,
        //             content: msg.content?.endsWith("/no_think") ? msg.content : msg.content + " /no_think"
        //         };
        //     }       
        //     return msg;
        // }); 

        // if (!URL) {
        //     return res.status(500).json({ error: 'La URL del modelo de IA no está configurada'}); 
        // }
        // // Logica para conectar con Ollama y obtener una respuesta 
        // let contextoSeguro = "Contestar en español";
     
        // const messagePromt = [
        //     { role: 'system', content: contextoSeguro },
        //     ...mensajesConNoThink, 
        // ];

        const stream = await ollama.chat({
            model: Model,
            messages: messages,
            stream: true, 
        })

        // Headers de streaming
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.setHeader("Transfer-Encoding", "chunked");
        
        for await (const part of stream) {
            const chunk = part.message?.content || "";
            res.write(chunk); // 🔥 enviás texto en tiempo real
        }

        res.end();
       
    } catch (error) {
        console.error("Error en chatController:", error);
        res.status(500).json({ error: "Error en el servidor" });
    }
}

export default {
    chatController, 
}