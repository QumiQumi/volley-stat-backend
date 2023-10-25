import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PlayerServicesAttributes {
    service_id?: number;
    is_ace?: number;
    is_error?: number;
    x_from?: number;
    y_from?: number;
    x_to?: number;
    y_to?: number;
    created_at?: Date;
    set_id: number;
    player_id: number;
}

@Table({
	tableName: "player_services",
	timestamps: false 
})
export class PlayerServices extends Model<PlayerServicesAttributes, PlayerServicesAttributes> implements PlayerServicesAttributes {

    @Column({
    	type: DataType.INTEGER,
    	defaultValue: "0" 
    })
    	service_id?: number;

    @Column({
    	type: DataType.TINYINT,
    	defaultValue: "0" 
    })
    	is_ace?: number;

    @Column({
    	allowNull: true,
    	type: DataType.TINYINT 
    })
    	is_error?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(12) 
    })
    	x_from?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(12) 
    })
    	y_from?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(12) 
    })
    	x_to?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(12) 
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