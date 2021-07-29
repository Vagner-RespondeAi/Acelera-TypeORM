import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Costumer from "./Costumer";


@Entity("order")
export default class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description : string;

  @Column()
  costumerId : number;

  @ManyToOne(()=> Costumer, costumer => costumer.id) costumer : Costumer;
}
