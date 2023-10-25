import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CoachesAttributes {
    id?: number;
    category?: string;
    user_id: number;
}

@Table({
	tableName: "coaches",
	timestamps: false 
})
export class Coaches extends Model<CoachesAttributes, CoachesAttributes> implements CoachesAttributes {

    @Column({
    	primaryKey: true,
    	autoIncrement: true,
    	type: DataType.INTEGER 
    })
    	id?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(100) 
    })
    	category?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	user_id!: number;

}