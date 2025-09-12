import express, { Router } from "express"

interface ServerOptions {
    port: number
    routes: Router
}



class ServerApp {

    private app = express()
    private port: number
    private routes: Router

    constructor({port, routes}: ServerOptions){
        this.port = port
        this.routes = routes
    }


    start() {
        
        //middleware
        this.app.use(express.urlencoded( { extended: true})) //puede recibir x-www-form-urlencoded
        this.app.use(express.json()) //pued recibir json


        //routes
        this.app.use(this.routes)


        this.app.listen(this.port,()=>{
            console.log(`Server listening on port ${this.port}`)
        })
    }

}


export {
    ServerApp
}