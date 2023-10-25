import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface сourtsAttributes {
    id?: number;
    name: string;
    address: string;
}

@Table({
	tableName: "сourts",
	timestamps: false 
})
export class сourts extends Model<сourtsAttributes, сourtsAttributes> implements сourtsAttributes {

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
    	type: DataType.STRING(200) 
    })
    	address!: string;

}