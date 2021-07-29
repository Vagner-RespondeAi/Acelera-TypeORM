import { getRepository } from "typeorm";

import Costumer from "../../src/entities/Costumer";
import Order from "../../src/entities/Order";

export async function clearDatabase () {
  await getRepository(Order).delete({});
  await getRepository(Costumer).delete({});
}
