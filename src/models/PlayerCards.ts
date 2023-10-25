import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PlayerCardsAttributes {
    card_id: number;
    created_at?: Date;
    player_id: number;
    set_id: number;
}

@Table({
	tableName: "player_cards",
	timestamps: false 
})
export class PlayerCards extends Model<PlayerCardsAttributes, PlayerCardsAttributes> implements PlayerCardsAttributes {

    @Column({
    	type: DataType.INTEGER 
    })
    	card_id!: number;

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
    	player_id!: number;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	set_id!: number;

}