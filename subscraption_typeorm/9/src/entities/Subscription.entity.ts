import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne
} from "typeorm";
import { Users } from "./User.entity";


@Entity()
export class Subs {

    @PrimaryGeneratedColumn()
    id!: string;

    @Column({ type: "number", nullable: false, name: "amountSubs" })
    amount!: number;

    @Column({ type: "text", nullable: false, name: "description" })
    title!: string;

    @ManyToOne(() => Users, (user) => user.id, { nullable: false })
    @JoinColumn({ name: "subs_id" })
    user_id!: Users;
}
