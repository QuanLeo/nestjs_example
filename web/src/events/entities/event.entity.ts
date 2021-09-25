import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@Index(["name", "type"]) // Add index for multiple col

export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  //@Index()  // Add index for col name
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
