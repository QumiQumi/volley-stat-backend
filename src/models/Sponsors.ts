import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface SponsorsAttributes {
    id?: number;
    name: string;
    logo?: string;
}

@Table({
	tableName: "sponsors",
	timestamps: false 
})
export class Sponsors extends Model<SponsorsAttributes, SponsorsAttributes> implements SponsorsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	type: DataType.STRING(256) 
    })
    	name!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(256) 
    })
    	logo?: string;

}