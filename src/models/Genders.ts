import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface GendersAttributes {
    id?: number;
    name: string;
    nume_full: string;
}

@Table({
	tableName: "genders",
	timestamps: false 
})
export class Genders extends Model<GendersAttributes, GendersAttributes> implements GendersAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	type: DataType.STRING(45) 
    })
    	name!: string;

    @Column({
    	type: DataType.STRING(45) 
    })
    	nume_full!: string;

}