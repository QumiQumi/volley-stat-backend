import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PlayerOnMatchAttributes {
    player_id: number;
    match_id: number;
    amplua_id?: number;
    jersey_number?: number;
}

@Table({
	tableName: "player_on_match",
	timestamps: false 
})
export class PlayerOnMatch extends Model<PlayerOnMatchAttributes, PlayerOnMatchAttributes> implements PlayerOnMatchAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	player_id!: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	match_id!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	amplua_id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	jersey_number?: number;

}