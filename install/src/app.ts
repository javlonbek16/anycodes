import express, { Application } from "express";
import { AppDataSource } from "../src/database/connection"
const app: Application = express();
app.use(express.json());
const bootstrap = async () => {
    await AppDataSource.initialize();
    console.log(" database...")
    app.listen(1234, () => {
        console.log(1234);
    });
};


bootstrap();
