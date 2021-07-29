import { getRepository } from "typeorm"
import Order from "../entities/Order"

interface createOrder {
    costumerId : number,
    description : string
}

export async function createOrder(costumerId:number, description: string) {
    
    const orderInfo : createOrder = {
        description, costumerId
    }

    const newOrder = getRepository(Order).create(orderInfo);

    const result = await getRepository(Order).save(newOrder);

    return result

}

export async function getWithCostumer() {
    
    const orders = await getRepository(Order).find({
        relations : ["costumer"] 
    });

    return orders
}

//psql -h ec2-3-213-146-52.compute-1.amazonaws.com -p 5432 -U cgaunqzrylqara dc87ll3i8tvs8g