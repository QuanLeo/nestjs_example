// class output from db
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";

@Entity()  //sql table = coffee
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  brand: string;

  @Column({ nullable: true })
  descriptions: string

  @Column({ default: 0 })
  recommendations: number

  @JoinTable()
  @ManyToMany(
    () => Flavor,
    flavor => flavor.coffees,
    {
      cascade: true, // 👈 or optionally just insert or update ['insert']
    }
  )
  flavors: Flavor[];

  /**
   * Convert to QueryBuilder
   * const coffeesWithFlavors = await connection
      .getRepository(Coffee)
      .createQueryBuilder("coffee")
      .leftJoinAndSelect("coffee.flavors", "flavor")
      .getMany();
  */
}