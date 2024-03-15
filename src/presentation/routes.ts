import { Router } from "express";
import { MensajesRoutes } from "./mensajes/routes";


export class AppRoutes {

    static get routes(): Router{


        const router = Router();

        router.use('/api/v1/mensajes', MensajesRoutes.routes);

        return router;

    }

}
