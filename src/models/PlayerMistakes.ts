import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PlayerMistakesAttributes {
    mistake_id: number;
    created_at?: Date;
    set_id: number;
    player_id: number;
}

@Table({
	tableName: "player_mistakes",
	timestamps: false 
})
export class PlayerMistakes extends Model<PlayerMistakesAttributes, PlayerMistakesAttributes> implements PlayerMistakesAttributes {

    @Column({
    	type: DataType.INTEGER 
    })
    	mistake_id!: number;

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