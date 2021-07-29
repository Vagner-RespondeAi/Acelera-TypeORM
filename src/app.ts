import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as costumerController from "./controllers/costumerController"
import * as orderController from "./controllers/orderController"

const app = express();
app.use(cors());
app.use(express.json());

app.post("/costumer", costumerController.register);
app.post("/order", orderController.register );
app.get("/order", orderController.getOrders);

export async function init () {
  await connectDatabase();
}

export default app;
