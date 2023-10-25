import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface BlocksAttributes {
    id?: number;
    name: string;
}

@Table({
	tableName: "blocks",
	timestamps: false 
})
export class Blocks extends Model<BlocksAttributes, BlocksAttributes> implements BlocksAttributes {

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