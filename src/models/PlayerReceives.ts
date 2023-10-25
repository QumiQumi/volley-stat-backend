import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PlayerReceivesAttributes {
    receiving_id?: number;
    created_at?: Date;
    set_id: number;
    player_id: number;
}

@Table({
	tableName: "player_receives",
	timestamps: false 
})
export class PlayerReceives extends Model<PlayerReceivesAttributes, PlayerReceivesAttributes> implements PlayerReceivesAttributes {

    @Column({
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	receiving_id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE,
    	defaultValue: DataType.NOW 
    })
    	created_at?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	set_id!: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	player_id!: number;

}