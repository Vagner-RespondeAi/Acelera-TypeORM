import { getRepository } from "typeorm";
import Costumer from "../../src/entities/Costumer";


export async function createCostumer () {
  const user = await getRepository(Costumer).create({
    name: "Joaozinho",
    isVip : false
  });

  await getRepository(Costumer).save(user);
  return user;
}
