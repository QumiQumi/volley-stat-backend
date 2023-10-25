import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface AmpluaAttributes {
    id?: number;
    name: string;
}

@Table({
	tableName: "amplua",
	timestamps: false 
})
export class Amplua extends Model<AmpluaAttributes, AmpluaAttributes> implements AmpluaAttributes {

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