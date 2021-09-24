// class output from db
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()  //sql table = cooffee
export class Coffee {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}