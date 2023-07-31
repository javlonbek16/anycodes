import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    password: "1234",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User],
})
