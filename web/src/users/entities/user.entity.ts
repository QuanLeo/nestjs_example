import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRoles } from "../user.roles";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({
    type: "enum",
    enum: UserRoles,
    default: UserRoles.USER
  })
  role: number;
}