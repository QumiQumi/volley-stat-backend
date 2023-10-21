import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export default class Team extends Model {
	@PrimaryKey
	@Column
	id: number;
	@Column
	name: string;
}
