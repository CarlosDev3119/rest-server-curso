
import express, { Router } from 'express';





interface Options {
    port: number;
    routes: Router
}

export class Server {

    public readonly app = express();
    public readonly routes: Router;
    public readonly port: number;


    constructor(options: Options){
        const { port, routes } = options;

        this.port = port;
        this.routes = routes;
    }

    async start() {

        this.app.use( express.json() )

        this.app.use( this.routes );


        this.app.listen(this.port, () => {
            console.log(`listening on port ${this.port}`)
        })
    }

}