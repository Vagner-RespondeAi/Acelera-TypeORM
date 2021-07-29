import { Request, Response } from "express";
import * as costumerService from "../services/costumerService"

export async function register(req :Request, res: Response) {
    
    try{
        const {name} = req.body;

        if(!name){
            return res.sendStatus(422);
        }

        const newCostumer = await costumerService.createCostumer(name);

        return res.send(newCostumer)

    }
    catch(err){
        console.log(err);
        return res.sendStatus(500)
    }
}