import { Router } from "express";
import { PetController } from "./controller";


class PetsRoutes {

    static get routes (): Router {
        const router = Router()
        const petController = new PetController()


        router.get('/', petController.getAllPets)

        router.get('/:id', petController.getPetById)
        
        router.post('/', petController.createPet)

        router.put('/:id', petController.updatePet)

        router.delete('/:id', petController.deletePet)








        return router
    }

    
}


export {
    PetsRoutes
}