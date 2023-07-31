import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Todo } from "./Todo.entity";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text", nullable: false, name: "first_name" })
  first_name!: string;

  @Column({ type: "text", nullable: false, name: "last_name" })
  last_name!: string;

  @Column({ type: "text", nullable: false, name: "date_birth" })
  date_birth!: string;

  @Column({ type: "text", nullable: true, name: "date_death", default: "alive" })
  date_death!: string;

  @Column({ type: "text", nullable: false, name: "country" })
  country!: string;

  @Column({ type: "text", nullable: false, name: "bio" })
  bio!: string;


  @OneToMany(() => Todo, (todo) => todo.user_id)
  @JoinColumn({ name: "todo_id" })
  todos!: Todo[];
};

function JoinColum(arg: {
  name: string;
}): (target: Users, propertyKey: "todos") => void {
  throw new Error("Function not implemented.");
};
