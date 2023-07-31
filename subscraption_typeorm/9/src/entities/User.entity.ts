import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Subs } from "./Subscription.entity";

@Entity()
export class Users {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "text", nullable: false, name: "username" })
  username!: string;

  @Column({ type: "text", nullable: false, name: "password" })
  password!: string;

  @Column({ type: "float", default: 0, name: "balance" })
  balance!: number;

  @Column({ default: 0, name: "status" })
  status!: boolean;

  @OneToMany(() => Subs, (subs) => subs.user_id)
  @JoinColumn({ name: "user_id" })
  subs!: Subs[];
}

function JoinColum(arg0: {
  name: string;
}): (target: Users, propertyKey: "subs") => void {
  throw new Error("Function not implemented.");
}
