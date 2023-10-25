import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface MediaAttributes {
    id?: number;
    name: string;
    link?: string;
}

@Table({
	tableName: "media",
	timestamps: false 
})
export class Media extends Model<MediaAttributes, MediaAttributes> implements MediaAttributes {

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

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	link?: string;

}