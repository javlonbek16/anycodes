import express, { Application } from "express";
import { myDataSource } from "./database/connection";
import { router as routerTodo } from "./api/routes/todo.routes";
import { router as routerUser } from "./api/routes/user.routes";
import cors from "cors";


const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(routerUser);
app.use(routerTodo);


const bootstrap = async (): Promise<void> => {
  await myDataSource.initialize();
  app.listen(4000, () => {
    console.log(4000);
  });
};

bootstrap();
