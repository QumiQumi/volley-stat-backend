import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface JudgesAttributes {
    id?: number;
    category: string;
    user_id: number;
}

@Table({
	tableName: "judges",
	timestamps: false 
})
export class Judges extends Model<JudgesAttributes, JudgesAttributes> implements JudgesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	type: DataType.STRING(100) 
    })
    	category!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	user_id!: number;

}