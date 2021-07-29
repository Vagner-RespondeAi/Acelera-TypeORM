import { getRepository } from "typeorm";
import Order from "../../src/entities/Order";


export async function createOrder(costumerId: number) {

    const order = await getRepository(Order).create({
        description: "Frango com batata frita",
        costumerId
    });

    await getRepository(Order).save(order)
    return order;
}
