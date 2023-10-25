import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface RoundsAttributes {
    id?: number;
    name?: string;
    tournament_id: number;
}

@Table({
	tableName: "rounds",
	timestamps: false 
})
export class Rounds extends Model<RoundsAttributes, RoundsAttributes> implements RoundsAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(45) 
    })
    	name?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	tournament_id!: number;

}