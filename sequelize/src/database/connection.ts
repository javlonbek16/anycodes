import { Sequelize } from "sequelize"
const sequelize = new Sequelize("postgres://postgres:1234@localhost:5432/templates")


module.exports = {
    sequelize
}