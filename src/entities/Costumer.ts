import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";


@Entity("costumer")
export default class Costumer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name : string;

  @Column()
  isVip : boolean;

  @OneToMany(()=> Order, order => order.costumerId)  order : Order;
}
