import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ReceivesAttributes {
    id?: number;
    name: string;
}

@Table({
	tableName: "receives",
	timestamps: false 
})
export class Receives extends Model<ReceivesAttributes, ReceivesAttributes> implements ReceivesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	type: DataType.STRING(50) 
    })
    	name!: string;

}