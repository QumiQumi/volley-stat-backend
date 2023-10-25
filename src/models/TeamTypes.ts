import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface TeamTypesAttributes {
    id?: number;
    name: string;
}

@Table({
	tableName: "team_types",
	timestamps: false 
})
export class TeamTypes extends Model<TeamTypesAttributes, TeamTypesAttributes> implements TeamTypesAttributes {

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