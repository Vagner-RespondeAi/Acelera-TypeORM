import { getRepository } from "typeorm"
import Costumer from "../entities/Costumer"

interface createCostumer {
    name : string,
    isVip : boolean
}

export async function createCostumer(name:string) {
    
    const costumerInfo :createCostumer = {
        name : name,
        isVip : false
    }

    const newCostumer = getRepository(Costumer).create(costumerInfo);

    const result = await getRepository(Costumer).save(newCostumer);

    return result

}