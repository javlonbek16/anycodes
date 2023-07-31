import { sequelize } from './../database/connection';
import { DataTypes, Model } from 'sequelize';

 class Todos extends Model {
	public id!: number;
	public title!: string;
	public description!: string;
	public created_at!: Date;
	public updated_at!: Date;
}

Todos.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
           allowNull:false
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize, 
		modelName:"todos",
		tableName: 'todos',
    createdAt:"created_at",
    updatedAt:"updated_at",

	}
);

export default Todos
