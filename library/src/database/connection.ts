import {DataSource} from "typeorm";
import {Todo} from "../entities/Todo.entity";
import {Users} from "../entities/User.entity";

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  port: 5432,
  password: "1234",
  database: "typeormtemplate",
  synchronize: true,
  logging: false,
  entities: [Todo, Users],
});
