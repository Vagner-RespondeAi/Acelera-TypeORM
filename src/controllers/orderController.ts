import { Request, Response } from "express";
import * as orderService from "../services/orderService"

export async function register(req :Request, res: Response) {
    
    try{
        const {costumerId, description} = req.body;

        if(!costumerId || !description){
            return res.sendStatus(422);
        }

        const result = await orderService.createOrder(costumerId, description)

        return res.send(result)
       
    }
    catch(err){
        console.log(err);
        return res.sendStatus(500)
    }
}

export async function getOrders(req :Request, res: Response) {
    try {

        const orders = await orderService.getWithCostumer();

        return res.send(orders)

    }
    catch(err){
        console.log(err);
        return res.sendStatus(500)
    }
}
