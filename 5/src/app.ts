import express, {Application} from "express";
import config from "config";
import {connect} from "mongoose";
import routes from "./routes";
import {errorHandler} from "./middlewares/error-handler";
import cookie from "cookie-parser";

const app: Application = express();

const PORT: number = config.get("port");

app.use(express.json());
app.use(cookie());
app.use("/api", routes);
app.use(errorHandler);

const bootstrap = async () => {
  await connect("mongodb://127.0.0.1:27017/sms-test");

  app.listen(PORT, () => {
    console.log(PORT);
  });
};

bootstrap();
