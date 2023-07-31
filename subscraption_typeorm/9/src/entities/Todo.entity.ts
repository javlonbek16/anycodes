import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./User.entity";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text", nullable: false, name: "title" })
  title!: string;

  @Column({ type: "text", nullable: false, name: "description" })
  description!: string;

  @ManyToOne(() => Users, (user) => user.id, { nullable: false })
  @JoinColumn({ name: "user_id" })
  user_id!: Users;
}
