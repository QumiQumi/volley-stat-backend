import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ServicesAttributes {
    id?: number;
    name: string;
}

@Table({
	tableName: "services",
	timestamps: false 
})
export class Services extends Model<ServicesAttributes, ServicesAttributes> implements ServicesAttributes {

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