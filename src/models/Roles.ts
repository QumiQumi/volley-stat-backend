import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface RolesAttributes {
    id?: number;
    name: string;
}

@Table({
	tableName: "roles",
	timestamps: false 
})
export class Roles extends Model<RolesAttributes, RolesAttributes> implements RolesAttributes {

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