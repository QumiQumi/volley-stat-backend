import { Column, DataType, Model, Table } from "sequelize-typescript";

export interface PlayersAttributes {
	id?: number;
	amplua_id?: number;
	height?: number;
	height_level?: number;
	game_number?: number;
	user_id: number;
}

@Table({
	tableName: "players",
	timestamps: false,
})
export class Players
	extends Model<PlayersAttributes, PlayersAttributes>
	implements PlayersAttributes
{
	@Column({
		primaryKey: true,
		autoIncrement: true,
		type: DataType.INTEGER,
	})
	id?: number;

	@Column({
		allowNull: true,
		type: DataType.INTEGER,
	})
	amplua_id?: number;

	@Column({
		allowNull: true,
		type: DataType.INTEGER,
	})
	height?: number;

	@Column({
		allowNull: true,
		type: DataType.INTEGER,
	})
	height_level?: number;

	@Column({
		allowNull: true,
		type: DataType.INTEGER,
	})
	game_number?: number;

	@Column({
		type: DataType.INTEGER,
	})
	user_id!: number;
}
