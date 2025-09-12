import { Router } from "express"
import { PetsRoutes } from "./pets/routes"

class routes {
    
    static get routes() {

        const router = Router()

        router.use('/pets', PetsRoutes.routes)

        

        router.use('/{*splat}', (req,res)=>{
            res.json( {msg: "ruta no encontrada", status: 404})
        })
        return router
    }
}


export { 
    routes

}