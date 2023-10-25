import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface SpikesAttributes {
    id?: number;
    name: string;
}

@Table({
	tableName: "spikes",
	timestamps: false 
})
export class Spikes extends Model<SpikesAttributes, SpikesAttributes> implements SpikesAttributes {

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