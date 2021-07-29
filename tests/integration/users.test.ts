import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createCostumer } from "../factories/costumerFactory";
import { createOrder } from "../factories/orderFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("POST /costumer", () => {
  it("should answer with text \"OK!\" and status 200", async () => {
    const body = {
      name : "Joaozinho"
    }

    const response = await supertest(app).post("/costumer").send(body);
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual(    
      expect.objectContaining({
        name : body.name
      })
    );
  });
});

describe("POST /order", () => {
  it("should answer with text \"OK!\" and status 200", async () => {
    const costumer = await createCostumer()

    const body = {
      description : "Frango assado e batata frita",
      costumerId : costumer.id
    }

    const response = await supertest(app).post("/order").send(body);
    
    expect(response.status).toBe(200);
    
    expect(response.body).toEqual(    
      expect.objectContaining({
        description : body.description,
        costumerId : body.costumerId
      })
    );
  });
});

describe("GET /order", () => {
  it("should answer with text \"OK!\" and status 200", async () => {
    
    const costumer = await createCostumer();
    const order1 = await createOrder(costumer.id)
    const order2 = await createOrder(costumer.id)

    const response = await supertest(app).get("/order")

    console.log("body -> ", response.body)
    
    expect(response.status).toBe(200);
    
    expect(response.body).toEqual(    
      expect.arrayContaining([
        expect.objectContaining({
          description : expect.any(String),
          costumerId : costumer.id,
        })
      ])
    );
  });
});