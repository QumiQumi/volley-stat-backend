import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CardsAttributes {
    id?: number;
    name: string;
}

@Table({
	tableName: "cards",
	timestamps: false 
})
export class Cards extends Model<CardsAttributes, CardsAttributes> implements CardsAttributes {

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