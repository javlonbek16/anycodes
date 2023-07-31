"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const connection_1 = require("./../database/connection");
const relations_1 = require("./../models/relations");
const run = async (app) => {
    (0, relations_1.relations)();
    await connection_1.sequelize.authenticate({
        logging: false,
    });
    await connection_1.sequelize.sync({
        alter: true,
        logging: false,
    });
    console.log("connect to database ...");
    app.listen(4000, () => {
        console.log(4000);
    });
};
exports.run = run;
