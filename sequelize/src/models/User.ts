const { Model, DataType } = require("sequelize");


class User extends Model {
    public id?: number;
    public name?: string;
    public email?: string;
}