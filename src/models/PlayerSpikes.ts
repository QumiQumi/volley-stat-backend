import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PlayerSpikesAttributes {
    spike_id?: number;
    is_point?: number;
    is_out?: number;
    in_net?: number;
    x_from?: number;
    y_from?: number;
    x_to?: number;
    y_to?: number;
    created_at?: Date;
    set_id: number;
    player_id: number;
}

@Table({
	tableName: "player_spikes",
	timestamps: false 
})
export class PlayerSpikes extends Model<PlayerSpikesAttributes, PlayerSpikesAttributes> implements PlayerSpikesAttributes {

    @Column({
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	spike_id?: number;

    @Column({
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	is_point?: number;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT 
    })
    	is_out?: number;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT 
    })
    	in_net?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	x_from?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	y_from?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	x_to?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	y_to?: number;

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