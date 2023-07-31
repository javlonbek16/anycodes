import { sequelize } from './../database/connection';
import { Sequelize, DataTypes, Model } from 'sequelize';

 class Users extends Model {
	public id!: number;
	public title!: string;
	public username!: string;
	public email!: string;
	public password!: string;
	public created_at!: Date;
	public updated_at!: Date;
}

Users.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
           allowNull:false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
            unique:true
		},
        password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize, 
		modelName:"users",
		tableName: 'users',
    createdAt:"created_at",
    updatedAt:"updated_at",

	}
);

export default Users
