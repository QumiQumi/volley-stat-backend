import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LeaguesAttributes {
    id?: number;
    name: string;
}

@Table({
	tableName: "leagues",
	timestamps: false 
})
export class Leagues extends Model<LeaguesAttributes, LeaguesAttributes> implements LeaguesAttributes {

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

}