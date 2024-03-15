import { Router } from "express";

export class MensajesRoutes{

    static get routes(): Router {

        const router = Router();

        router.get('/', function(req, response) {      

            response.status(201).json({
                message: 'Mensaje obtenido',
                data: {
                    mensaje: 'Este mensaje es de prueba'
                }
            });
        });
        
        router.post('/', function(req, res) {

            res.status(200).json({
                message: 'Mensaje creado',
                data: []
            });
            
        });

        return router;

    }

}