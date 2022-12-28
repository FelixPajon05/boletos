import express, { Application } from "express";

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = '3030';
        this.listen();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`listening on ${this.port}`)
        })
    }
}

export default Server;