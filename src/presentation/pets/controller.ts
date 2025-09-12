import { create } from "domain"
import { Request, Response } from "express"
interface PetCard {
    id: number, 
    QR: string,
    petName: string, 
    ownerName: string,
    phone: string,
    medicine: string,
    other: string,
    createdAt: Date | null
}

// interface OptionBody {
//             QR: string,
//             petName: string,
//             ownerName: string,
//             phone: string,
//             medicine: string, 
//             other: string,
//             createdAt: Date | null
// }



let pets: PetCard[] = [
    {
        "id": 1,
        "QR": "rwerfgsdawerweq3242323rewrwer",
        "petName": "Otto",
        "ownerName": "Jose Garcia",
        "phone": "3794599549",
        "medicine": "cardial, cardiac",
        "other": "",
        "createdAt": new Date("2025-01-12")
    },
    {
        "id": 2,
        "QR": "rwe32343twerfgsdawerweq3242323rewrwer",
        "petName": "Patan",
        "ownerName": "Jose Garcia",
        "phone": "3794599549",
        "medicine": "cardial, cardiac",
        "other": "",
        "createdAt": new Date("2025-02-01")
    },
    {
        "id": 3,
        "QR": "r3346789werfgsdawerweq3242323rewrwer",
        "petName": "Toro",
        "ownerName": "Cacho Gonzalez",
        "phone": "3794592345",
        "medicine": "",
        "other": "",
        "createdAt": new Date ("2025-03-25")
    }
]

class PetController {

    constructor(){}


    public getAllPets = (req: Request, res: Response) =>{
        return res.status(200).json({response: pets, status: 200})
    }

    public getPetById = (req: Request, res: Response)=>{
        const {id} = req.params
        const idNumber = parseInt(id)
        const result = pets.filter(x=>x.id === idNumber)
        if (result.length<1) res.status(404).json({ response: `No existe elemento con id ${idNumber}`, status: 404})
        else res.status(200).json({ reponse: result[0], status: 200})
    }

    public createPet = (req: Request, res: Response)=>{
    const {
        id, 
        QR,
        petName, 
        ownerName,
        phone,
        medicine,
        other,
        createdAt
    }=req.body
    const newId = parseInt(id)
    
    const result = pets.find(x=> x.id===newId)
    if (result) return res.status(400).json({ response: `El id ${newId} ya existe`, status: 400})
    

    const newPet: PetCard = {
        id: newId, 
        QR,
        petName, 
        ownerName,
        phone,
        medicine,
        other,
        createdAt: new Date()
    }
    pets.push(newPet)
    return res.status(201).json({ response: pets, status: 201})
    }

    public updatePet =(req:Request, res: Response)=>{
        const {id} = req.params
        const {
            QR,
            petName,
            ownerName,
            phone,
            medicine, 
            other,
            createdAt
        } = req.body

        const newId=parseInt(id)
        const result=pets.find(x=>x.id===newId)
        if (!result) return res.status(200).json({ response: `No existe el indice ${newId}`, status: 404})
        
        if (QR) result.QR = QR   
        if (petName) result.petName = petName
        if (ownerName) result.ownerName = ownerName
        if (phone) result.phone = phone
        if (medicine) result.medicine = medicine 
        if (other) result.other = other
        if (createdAt===null) result.createdAt=null
        else if (createdAt==="") result.createdAt=new Date()
        else result.createdAt=new Date(createdAt)    
        return res.status(200).json({ response: pets, status: 200})    
    }

    public deletePet = (req:Request, res: Response)=>{
        const {id} = req.params
        const newId = parseInt(id)

        const petsOriginalLenght = pets.length
        const result = pets.filter(x=>x.id!==newId)

        const petsFinalLenght = result.length
        if (petsOriginalLenght===petsFinalLenght) return res.status(404).json({ response: `No existe elemento con id ${newId}`, status: 404})
        pets = result
        return res.status(200).json({response: pets, status: 200})
    }

}

export {
    PetController
}