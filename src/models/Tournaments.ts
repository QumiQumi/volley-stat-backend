import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface TournamentsAttributes {
    id?: number;
    name: string;
    start_date?: string;
    date_end?: string;
    description?: string;
    league_id: number;
}

@Table({
	tableName: "tournaments",
	timestamps: false 
})
export class Tournaments extends Model<TournamentsAttributes, TournamentsAttributes> implements TournamentsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	type: DataType.STRING(100) 
    })
    	name!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	start_date?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	date_end?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(150) 
    })
    	description?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	league_id!: number;

}