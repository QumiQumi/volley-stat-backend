import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface SetsAttributes {
    id?: number;
    match_id: number;
    number: number;
    score?: number;
}

@Table({
	tableName: "sets",
	timestamps: false 
})
export class Sets extends Model<SetsAttributes, SetsAttributes> implements SetsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	match_id!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	number!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	score?: number;

}