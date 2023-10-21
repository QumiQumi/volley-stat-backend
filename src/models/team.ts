import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export default class Team extends Model {
	@PrimaryKey
	@Column
	id: number;
	@Column
	name: string;
}
// export const Team = sequelize.define("Team", {
// 	id: {
// 		type: DataTypes.NUMBER,
// 		primaryKey: true,
// 	},
// 	name: DataTypes.STRING,
// });
