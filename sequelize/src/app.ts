const express = require("express")
const app = express();
const { sequelize } = require("./database/connection")
const pg = async () => {
    await sequelize.authenticate({
        logging: false,
    });
    console.log("connect to database");
    
    app.listen(1234, () => {
        console.log(1234);
    })
}


pg();