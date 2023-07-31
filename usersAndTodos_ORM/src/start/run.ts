import {sequelize} from "./../database/connection";
import {relations} from "./../models/relations";
import {Application} from "express";

export const run = async (app: Application) => {
  relations();
  await sequelize.authenticate({
    logging: false,
  });
  await sequelize.sync({
    alter: true,
    logging: false,
  });
  console.log("connect to database ...");

  app.listen(4000, () => {
    console.log(4000);
  });
};
