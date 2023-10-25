import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface MistakesAttributes {
    id?: number;
    name: string;
}

@Table({
	tableName: "mistakes",
	timestamps: false 
})
export class Mistakes extends Model<MistakesAttributes, MistakesAttributes> implements MistakesAttributes {

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

}