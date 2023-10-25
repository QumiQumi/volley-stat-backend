import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PlayerBlocksAttributes {
    block_id?: number;
    x?: number;
    y?: number;
    created_at?: Date;
    set_id: number;
    player_id: number;
}

@Table({
	tableName: "player_blocks",
	timestamps: false 
})
export class PlayerBlocks extends Model<PlayerBlocksAttributes, PlayerBlocksAttributes> implements PlayerBlocksAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	block_id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(12) 
    })
    	x?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(12) 
    })
    	y?: number;

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